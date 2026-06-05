import { Stack, Typography } from "@mui/material";
import Wrapper from "../wrappers/SectionWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";
import CardWrapper from "../wrappers/CardWrapper";
import ThumbnailWrapper from "../wrappers/ThumbnailWrapper";
import ButtonWrapper from "../wrappers/ButtonWrapper";
import { story_content } from "../sources/textContent.jsx";

const AboutMe = () => {
	return (
		<Wrapper>
			<Stack direction={"column"} sx={{ p: 2 }}>
				<HeaderWrapper id="projects">Side projects and stories</HeaderWrapper>
				<Typography variant="p">
					In my early career, I have been interested in exploring creative
					applications of technologies. I have been involved in several creative
					projects that explore the intersection of art and technology. Here are
					some of the projects I have worked on.
				</Typography>
			</Stack>
			<Stack direction={"row"} flexWrap={"wrap"}>
				{story_content.map((story, index) => (
					<CardWrapper key={index}>
						<Stack direction={{ md: "row", xs: "column" }} spacing={{ xs: "3" }}>
							{story.img ? (
								<ThumbnailWrapper>{story.img}</ThumbnailWrapper>
							) : null}
							<Stack
								direction={"column"}
								alignItems={"flex-start"}
								sx={{ p: 2 }}
							>
								<Stack sx={{ lineHeight: "150%", pb: 1 }}>{story.title}</Stack>
								<Stack>{story.content}</Stack>
								<Stack direction={"row"} sx={{ pt: 1 }}>
									<ButtonWrapper link={story.link} text="More" />
								</Stack>
							</Stack>
						</Stack>
					</CardWrapper>
				))}
			</Stack>
		</Wrapper>
	);
};

export default AboutMe;
