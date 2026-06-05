import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Stack, Container, Typography } from "@mui/material";
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

	const paragraphs = essay.content
		.split(/\n\n+/)
		.map((p) => p.trim())
		.filter(Boolean);
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
				<meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
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
				{essay.image && (
					<img
						src={essay.image}
						alt={essay.title}
						style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
					/>
				)}
				<Stack sx={{ borderTop: "1px solid #eee", pt: 3, gap: 2 }}>
					{paragraphs.map((para, i) => (
						<Typography key={i} sx={{ lineHeight: 1.8 }}>
							{para}
						</Typography>
					))}
				</Stack>
			</Stack>
		</Container>
	);
};

export default EssayPage;
