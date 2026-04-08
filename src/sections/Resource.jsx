import { Stack, Typography } from "@mui/material";
import Wrapper from "../wrappers/SectionWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";
import CardWrapper from "../wrappers/CardWrapper";
import ButtonWrapper from "../wrappers/ButtonWrapper";

const resource_content = [
	{
		title: "Resource Title",
		content: "A short introduction to this resource and why it's useful.",
		link: "https://example.com",
	},
	// Add more resources here
];

const Resource = () => {
	return (
		<Wrapper>
			<Stack direction={"column"} sx={{ p: 2 }}>
				<HeaderWrapper id="resource">Research Resources</HeaderWrapper>
				<Typography variant="p">
					A curated list of resources related to my research interests.
				</Typography>
			</Stack>
			<Stack direction={"row"} flexWrap={"wrap"}>
				{resource_content.map((resource, index) => (
					<CardWrapper key={index}>
						<Stack direction={"column"} alignItems={"flex-start"} sx={{ p: 2 }}>
							<Stack sx={{ lineHeight: "150%", pb: 1, fontWeight: 500 }}>
								{resource.title}
							</Stack>
							<Stack>{resource.content}</Stack>
							<Stack direction={"row"} sx={{ pt: 1 }}>
								<ButtonWrapper link={resource.link} text="Visit" />
							</Stack>
						</Stack>
					</CardWrapper>
				))}
			</Stack>
		</Wrapper>
	);
};

export default Resource;
