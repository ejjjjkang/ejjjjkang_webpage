import { useState } from "react";
import Wrapper from "../wrappers/SectionWrapper";
import CardWrapper from "../wrappers/CardWrapper";
import { project_content } from "../sources/textContent.jsx";
import { Button, Stack, Typography, Skeleton, Box } from "@mui/material";
import { ConferenceChipWrapper } from "../wrappers/WordChipWrapper";
import ThumbnailWrapper from "../wrappers/ThumbnailWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";
import ButtonWrapper from "../wrappers/ButtonWrapper";

const Projects = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleClick = (idx) => {
		setActiveIndex(idx);
	};

	return (
		<Wrapper>
			<Stack direction={"column"} sx={{ p: 2 }}>
				<HeaderWrapper id="publications">Publications</HeaderWrapper>
				<Typography variant="p">
					This is a collection of publication I have worked on. You can find
					more information in the PDFs.
				</Typography>
			</Stack>
			<Stack direction={"row"} flexWrap={"wrap"}>
				{project_content.map((project, index) => (
					<CardWrapper key={index}>
						<Stack
							direction={{ md: "row", xs: "column" }}
							spacing={{ xs: "3" }}
						>
							{project.img ? (
								<ThumbnailWrapper>{project.img}</ThumbnailWrapper>
							) : (
								<Skeleton variant="rectangular" width={300} height={150} />
							)}
							<Stack
								direction={"column"}
								alignItems={"flex-start"}
								sx={{ p: 2 }}
							>
								<Box variant="span" sx={{ lineHeight: "150%", pb: 1 }}>
									<ConferenceChipWrapper>
										{project.conference}
									</ConferenceChipWrapper>
									{project.title}
								</Box>
								<Box variant="span">
									{project.author.map((author) => (
										<Typography key={author} sx={{ display: "inline", pr: 1 }}>
											{author === "Eun Jeong Kang" ? (
												<strong style={{ color: "#bf55cf" }}>{author}</strong>
											) : (
												author
											)}
										</Typography>
									))}
								</Box>
								<Stack
									direction={"column"}
									sx={{ pt: 1 }}
									justifyContent={"flex-start"}
								>
									<Stack direction={"row"}>
										{project.published ? (
											<>
												<ButtonWrapper
													abs={project.abs}
													index={index}
													handleClick={handleClick}
													setActiveIndex={setActiveIndex}
													activeIndex={activeIndex}
													text="Abs"
												/>
												<ButtonWrapper link={project.link_doi} text="Doi" />
												<ButtonWrapper link={project.link_pdf} text="PDF" />
											</>
										) : (
											<>
												<Stack sx={{ mr: 1, mt: 2 }}>
													<Button variant="outlined" disabled>
														To appear
													</Button>
												</Stack>
											</>
										)}
									</Stack>
									{index === activeIndex ? (
										<Box
											sx={{
												backgroundColor: "#acdee9",
												p: 1,
												mt: 1,
												borderRadius: "10px",
											}}
										>
											{project.abs}
										</Box>
									) : null}
								</Stack>
							</Stack>
						</Stack>
					</CardWrapper>
				))}
			</Stack>
		</Wrapper>
	);
};

export default Projects;
