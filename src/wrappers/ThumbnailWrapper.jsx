import { Stack } from "@mui/material";

const ThumbnailWrapper = ({ children }) => {
	return (
		<Stack sx={{ width: { md: "40%", xs: "100%" }, height: { md: "28%", xs: "auto" } }}>
			<img style={{ borderRadius: "12px" }} src={children} alt="thumbnail" />
		</Stack>
	);
};

export default ThumbnailWrapper;
