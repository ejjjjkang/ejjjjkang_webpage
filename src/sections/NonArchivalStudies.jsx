import { useState } from "react";
import Wrapper from "../wrappers/SectionWrapper";
import { study_content } from "../sources/textContent.jsx";
import { Stack, Typography } from "@mui/material";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";
import PublicationCardWrapper from "../wrappers/PublicationCardWrapper";

const NonArchivalStudies = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleClick = (idx) => {
		setActiveIndex(idx);
	};

	return (
		<Wrapper>
			<Stack direction={"column"} sx={{ p: 2 }}>
				<HeaderWrapper id="studies">Non-archival Studies</HeaderWrapper>
				<Typography variant="p">
					Non-archival studies I ran throughout my PhD program. Through them, I
					trained in controlled experiments, quantitative trend analysis, and
					critical discourse analysis.
				</Typography>
			</Stack>
			<Stack direction={"row"} flexWrap={"wrap"}>
				{study_content.map((entry, index) => (
					<PublicationCardWrapper
						key={entry.title}
						entry={entry}
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

export default NonArchivalStudies;
