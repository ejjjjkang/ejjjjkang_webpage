import { Stack, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileWrapper from "../wrappers/ProfileWrapper";
import Wrapper from "../wrappers/SectionWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";

import "./index.css";
import NewsWrapper from "../wrappers/NewsWrapper";
import { news_content } from "../sources/textContent.jsx";
import { essay_content } from "../sources/essayContent";

const VISIBLE_COUNT = 3;

const Main = () => {
	const [showAll, setShowAll] = useState(false);

	const featuredNews = news_content.filter((n) => n.featureds);
	const visibleNews = showAll
		? featuredNews
		: featuredNews.slice(0, VISIBLE_COUNT);

	return (
		<Wrapper>
			<Stack
				sx={{
					maxWidth: "100%",
					maxHeight: "100%",
					margin: "auto",
				}}
			>
				<Stack direction={"column"}>
					<Stack
						direction={{ md: "row", xs: "column" }}
						sx={{ fontWeight: 400 }}
						alignItems={{ md: "center", xs: "flex-start" }}
					>
						<ProfileWrapper />
						<Stack
							direction={"column"}
							sx={{
								pl: { md: 4, xs: 0 },
								pt: { xs: 2, md: 0 },
								fontWeight: 400,
							}}
						>
							<HeaderWrapper id="me">About</HeaderWrapper>
							<Stack sx={{ lineHeight: "160%" }}>
								<p>
									I am a PhD candidate in{" "}
									<a
										className="inline_link"
										href="https://infosci.cornell.edu/"
									>
										Information Science
									</a>{" "}
									at Cornell University. I am currently working with{" "}
									<a
										className="inline_link"
										href="https://infosci.cornell.edu/content/fussell"
									>
										Dr. Susan Fussell
									</a>
									. <br />
									My research focuses on understanding how emerging technologies
									shape end-user experiences and how to design interventions
									that enable end-users to leverage technologies in accountable
									ways Recently, I am interested in understanding trust and
									safety issues in open source AI models.
									<br />
									<p>
										Previously, I worked as a digital marketing strategist and
										front-end developer that designs brand experience and
										incorporates multi-stakeholders' values with advertisements.
										Drawing on these experiences, I engaged in research projects
										that investigated societal impacts of AI technologies on
										end-users (
										<a
											className="inline_link"
											href="https://ai-cultures.github.io/papers/when_ai_meets_the_k_pop_cultur.pdf"
										>
											fans
										</a>
										,{" "}
										<a
											className="inline_link"
											href="https://doi.org/10.1145/3544548.3581386"
										>
											creators
										</a>
										).
									</p>
								</p>
							</Stack>
						</Stack>
					</Stack>
					<Stack
						direction={{ md: "row", xs: "column" }}
						sx={{ p: { md: 3, xs: 0 }, pt: 3, gap: { md: 4, xs: 2 } }}
					>
						{/* News column */}
						<Stack direction={"column"} sx={{ flex: 1 }}>
							<Stack
								direction="row"
								justifyContent="space-between"
								alignItems="flex-start"
							>
								<HeaderWrapper id="news-featured">News</HeaderWrapper>
								{featuredNews.length > VISIBLE_COUNT && (
									<Button
										size="small"
										onClick={() => setShowAll((prev) => !prev)}
										sx={{ mt: 0.5, textTransform: "none", color: "#11413f" }}
									>
										{showAll ? "Show less ▲" : `more ▼`}
									</Button>
								)}
							</Stack>
							<Stack sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
								{visibleNews.map((news, index) => (
									<NewsWrapper key={index} date={news.date}>
										{news.content}
									</NewsWrapper>
								))}
							</Stack>
						</Stack>

						{/* Essays column */}
						<Stack direction={"column"} sx={{ flex: 1 }}>
							<HeaderWrapper id="essays">Essays</HeaderWrapper>
							<Stack sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
								{essay_content.map((essay, index) => (
									<Stack
										key={index}
										direction="row"
										sx={{ alignItems: "flex-start" }}
									>
										<Stack
											sx={{
												whiteSpace: "nowrap",
												minWidth: { md: "110px", xs: "80px" },
												fontSize: { xs: "0.8rem", md: "1rem" },
											}}
										>
											{essay.date}
										</Stack>
										<Stack
											sx={{
												borderLeft: "1px solid",
												borderColor: "divider",
												pl: 2,
												flex: 1,
											}}
										>
											<Link
												to={`/essay/${essay.id}`}
												style={{ color: "#8a579c", textDecoration: "none" }}
											>
												{essay.title}
											</Link>
										</Stack>
									</Stack>
								))}
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Wrapper>
	);
};

export default Main;
