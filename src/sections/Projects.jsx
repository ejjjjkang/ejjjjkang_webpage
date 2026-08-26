import { useState } from "react";
import Wrapper from "../wrappers/SectionWrapper";
import {
	project_content,
	project_keywords,
} from "../sources/textContent.jsx";
import { Button, Stack, Typography } from "@mui/material";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";
import PublicationCardWrapper from "../wrappers/PublicationCardWrapper";

const Projects = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const [activeKeyword, setActiveKeyword] = useState(null);

	const handleClick = (idx) => {
		setActiveIndex(idx);
	};

	const handleKeywordClick = (keyword) => {
		// clicking the selected keyword again clears the filter
		setActiveKeyword((current) => (current === keyword ? null : keyword));
		setActiveIndex(null);
	};

	// filter buttons follow the site accent: outlined purple, filled when active
	const keywordButtonSx = (isActive) => ({
		mr: 1,
		mt: 1,
		textTransform: "none",
		borderColor: "#8a579c",
		color: isActive ? "#ffffff" : "#8a579c",
		backgroundColor: isActive ? "#bf55cf" : "transparent",
		"&:hover": {
			borderColor: "#bf55cf",
			backgroundColor: isActive ? "#bf55cf" : "#f4ebf7",
		},
	});

	const filteredProjects = activeKeyword
		? project_content.filter((project) =>
				(project.keywords || []).includes(activeKeyword)
		  )
		: project_content;

	return (
		<Wrapper>
			<Stack direction={"column"} sx={{ p: 2 }}>
				<HeaderWrapper id="publications">Publications</HeaderWrapper>
				<Typography variant="p">
					This is a collection of publication I have worked on. You can find
					more information in the PDFs.
				</Typography>
				<Stack
					direction={"row"}
					flexWrap={"wrap"}
					spacing={0}
					sx={{ pt: 2 }}
					role="group"
					aria-label="Filter publications by keyword"
				>
					<Button
						variant={activeKeyword === null ? "contained" : "outlined"}
						size="small"
						onClick={() => handleKeywordClick(null)}
						aria-pressed={activeKeyword === null}
						sx={keywordButtonSx(activeKeyword === null)}
					>
						All
					</Button>
					{project_keywords.map((keyword) => (
						<Button
							key={keyword}
							variant={activeKeyword === keyword ? "contained" : "outlined"}
							size="small"
							onClick={() => handleKeywordClick(keyword)}
							aria-pressed={activeKeyword === keyword}
							sx={keywordButtonSx(activeKeyword === keyword)}
						>
							{keyword}
						</Button>
					))}
				</Stack>
			</Stack>
			<Stack direction={"row"} flexWrap={"wrap"}>
				{filteredProjects.map((project, index) => (
					<PublicationCardWrapper
						key={project.title}
						entry={project}
						index={index}
						activeIndex={activeIndex}
						handleClick={handleClick}
						setActiveIndex={setActiveIndex}
					/>
				))}
			</Stack>
		</Wrapper>
	);
};

export default Projects;
