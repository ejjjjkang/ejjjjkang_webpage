import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

// Server entry used only by scripts/prerender.mjs at build time. Nothing here
// ships to the browser; src/index.jsx remains the client entry.
export function render(location = "/") {
	return renderToString(
		<HelmetProvider>
			<StaticRouter location={location}>
				<App />
			</StaticRouter>
		</HelmetProvider>,
	);
}
