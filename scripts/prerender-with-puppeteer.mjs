#!/usr/bin/env node
import fs from 'fs/promises';
import { existsSync, createReadStream } from 'fs';
import path from 'path';
import http from 'http';
import url from 'url';
import puppeteer from 'puppeteer';

const DIST = path.resolve('dist');
const ROUTES_FILE = path.resolve('prerender-routes.txt');
const DEFAULT_PORT = process.env.PRERENDER_PORT || 4321;

async function readRoutes() {
  const txt = await fs.readFile(ROUTES_FILE, 'utf8');
  return txt
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function createStaticServer(root) {
  return http.createServer((req, res) => {
    try {
      const parsed = url.parse(req.url || '/');
      let p = decodeURIComponent(parsed.pathname || '/');
      if (p.endsWith('/')) p = p.slice(0, -1);
      let filePath = path.join(root, p);
      // if directory, serve index.html
      if (existsSync(filePath) && fs.lstatSync?.(filePath)?.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
      // try with index.html for route
      if (!existsSync(filePath)) {
        const alt = path.join(root, parsed.pathname === '/' ? 'index.html' : parsed.pathname, 'index.html');
        if (existsSync(alt)) filePath = alt;
        else filePath = path.join(root, 'index.html');
      }
      const stream = createReadStream(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      stream.pipe(res);
    } catch (err) {
      res.statusCode = 500;
      res.end('Server error');
    }
  });
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function prerender() {
  if (!existsSync(DIST)) {
    console.error('dist folder not found; run build first');
    process.exit(1);
  }
  if (!existsSync(ROUTES_FILE)) {
    console.error('prerender-routes.txt not found; run generate-prerender-routes first');
    process.exit(1);
  }

  const routes = await readRoutes();
  const server = createStaticServer(DIST);

  await new Promise((resolve, reject) => {
    server.listen(DEFAULT_PORT, (err) => (err ? reject(err) : resolve()));
  });
  const base = `http://localhost:${DEFAULT_PORT}`;
  console.log('Serving', DIST, 'on', base);

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  for (const route of routes) {
    const url = route === '/' ? `${base}/` : `${base}${route}`;
    console.log('Prerendering', url);
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
      const html = await page.content();
      const outPath = route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route, 'index.html');
      await ensureDir(path.dirname(outPath));
      await fs.writeFile(outPath, html, 'utf8');
      console.log('Wrote', outPath);
    } catch (err) {
      console.error('Failed to prerender', url, err.message || err);
    }
  }

  await browser.close();
  server.close();
  console.log('Prerender complete');
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
