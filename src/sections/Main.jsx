import { Stack, Button } from "@mui/material";
import { useState } from "react";
import ProfileWrapper from "../wrappers/ProfileWrapper";
import Wrapper from "../wrappers/SectionWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";

import "./index.css";
import NewsWrapper from "../wrappers/NewsWrapper";
import { news_content } from "../sources/textContent.jsx";

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
				<Stack direction={{ md: "row", xs: "column" }} alignItems={"center"}>
					<ProfileWrapper />
					<Stack direction={"column"} sx={{ p: 5, fontWeight: 400 }}>
						<HeaderWrapper id="me">About</HeaderWrapper>
						<Stack sx={{ lineHeight: "160%" }}>
							<p>
								I am a third-year PhD student in{" "}
								<a className="inline_link" href="https://infosci.cornell.edu/">
									Information Science
								</a>{" "}
								at Cornell University. I am currently working with{" "}
								<a
									className="inline_link"
									href="https://infosci.cornell.edu/content/fussell"
								>
									Susan Fussell
								</a>
								. <br />
								My research focuses on how emerging technologies shape end-user
								experiences and how to design interventions that enable
								end-users to leverage technologies in accountable ways Recently,
								I am interested in investigating platforms' governance power
								over AI technologies, trust and safety issues in Human-AI
								interactions, and creative AI supply-chain. <br />
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
				</Stack>
			</Stack>
		</Wrapper>
	);
};

export default Main;
