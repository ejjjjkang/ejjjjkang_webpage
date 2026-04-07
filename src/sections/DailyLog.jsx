import Wrapper from "../wrappers/SectionWrapper";
import { Stack, Typography } from "@mui/material";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";

const DailyLog = () => {
	return (
		<Wrapper>
			<HeaderWrapper id="news">News</HeaderWrapper>
			{/* <iframe
				style={{ borderRadius: "12px" }}
				src="https://open.spotify.com/embed/playlist/4PK5g801rWmxgHVTDBBbtd?utm_source=generator&theme=0"
				width="30%"
				height="352"
				frameBorder="0"
				allowFullScreen
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe> */}
			<Stack sx={{ width: "100%", height: "100%", margin: "0 0 auto" }}>
				<iframe
					style={{ width: "100%", height: "100%", margin: "0 0 auto" }}
					src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI3qO38r8_RDM0uvG4EjVZBp6ttgE6_-569Guz8BHcpOM8T14kA_FktfMw8RUb21zAtQknF0iqvLUK/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
				></iframe>
			</Stack>
		</Wrapper>
	);
};

export default DailyLog;
