import { Stack } from "@mui/material";
import ProfileWrapper from "../wrappers/ProfileWrapper";
import Wrapper from "../wrappers/SectionWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";

import "./index.css";
import NewsWrapper from "../wrappers/NewsWrapper";
import { news_content } from "../sources/textContent";

const Main = () => {
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
					<Stack direction={"column"} sx={{ p: 5 }}>
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
								My research focuses on designing AI systems and communication
								technologies that incorporates social values. Utilizing
								user-centered methods (e.g., surveys, interviews, speculative
								design), I aim to design AI systems that promote appropriate
								reliance with responsibility, which aligns with stakeholder
								values. <br />
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
						<HeaderWrapper id="news-featured">News</HeaderWrapper>
						{news_content.map((news, index) =>
							news.featureds ? (
								<NewsWrapper key={index} date={news.date}>
									{news.content}
								</NewsWrapper>
							) : null
						)}
					</Stack>
				</Stack>
			</Stack>
		</Wrapper>
	);
};

export default Main;
