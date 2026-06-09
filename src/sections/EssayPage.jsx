import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Stack, Container, Typography, Paper } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { essay_content } from "../sources/essayContent";
import {
	getEssayDescription,
	getEssayImageUrl,
	getEssayUrl,
} from "../utils/essayMeta";

const EssayPage = () => {
	const { id } = useParams();
	const essay = essay_content.find((e) => e.id === id);

	if (!essay) {
		return (
			<Container sx={{ pt: "80px", maxWidth: "720px" }}>
				<Typography>Essay not found.</Typography>
				<Link to="/">← Back</Link>
			</Container>
		);
	}

	// Prefer explicit `disclaimerText` field; otherwise extract a leading "Disclaimer:" paragraph from content
	const disclaimerText =
		essay.disclaimerText ||
		(() => {
			const m = essay.content.match(
				/^\s*Disclaimer:\s*([\s\S]*?)(?:\n{2,}|$)/i,
			);
			return m ? m[1].trim() : null;
		})();

	const contentBody = essay.disclaimerText
		? essay.content
		: disclaimerText
			? essay.content.replace(/^\s*Disclaimer:[\s\S]*?(?:\n{2,}|$)/i, "").trim()
			: essay.content;

	const paragraphs = null;
	const description = getEssayDescription(essay.content);
	const pageUrl = getEssayUrl(essay.id);
	const imageUrl = getEssayImageUrl(essay.image);

	return (
		<Container sx={{ pt: "80px", pb: 8, maxWidth: "720px" }}>
			<Helmet>
				<title>{`${essay.title} | Eun Jeong Kang`}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={pageUrl} />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={essay.title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={pageUrl} />
				{imageUrl && <meta property="og:image" content={imageUrl} />}
				<meta
					name="twitter:card"
					content={imageUrl ? "summary_large_image" : "summary"}
				/>
				<meta name="twitter:title" content={essay.title} />
				<meta name="twitter:description" content={description} />
				{imageUrl && <meta name="twitter:image" content={imageUrl} />}
			</Helmet>
			<Stack direction="column" sx={{ gap: 2 }}>
				<Link
					to="/"
					style={{
						color: "#8a579c",
						textDecoration: "none",
						fontSize: "0.9rem",
					}}
				>
					← Back
				</Link>
				<Typography variant="h4" sx={{ fontWeight: 600 }}>
					{essay.title}
				</Typography>
				<Typography sx={{ color: "#999", fontSize: "0.9rem" }}>
					{essay.date}
				</Typography>
				{disclaimerText && (
					<Paper
						elevation={0}
						sx={{
							p: 2,
							bgcolor: "#f5f5f5",
							borderLeft: "4px solid #e0e0e0",
							borderRadius: "6px",
						}}
					>
						<Typography sx={{ fontSize: "0.85rem", fontWeight: 600, mb: 0.5 }}>
							Disclaimer
						</Typography>
						<Typography sx={{ fontSize: "0.9rem", color: "#444" }}>
							{disclaimerText}
						</Typography>
					</Paper>
				)}
				{essay.image && (
					<img
						src={essay.image}
						alt={essay.title}
						style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
					/>
				)}
				<Stack sx={{ borderTop: "1px solid #eee", pt: 3, gap: 2 }}>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						components={{
							a: ({ node, ...props }) => (
								<a
									{...props}
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "#8a579c" }}
								/>
							),
							p: ({ node, children }) => (
								<Typography component="div" sx={{ lineHeight: 1.8 }}>
									{children}
								</Typography>
							),
						}}
					>
						{contentBody}
					</ReactMarkdown>
				</Stack>
			</Stack>
		</Container>
	);
};

export default EssayPage;
