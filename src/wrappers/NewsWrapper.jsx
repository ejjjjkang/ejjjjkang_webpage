import { Stack } from "@mui/material";

const NewsWrapper = ({ children, date }) => {
	return (
		<Stack direction={"row"} sx={{ alignItems: "flex-start" }}>
			<Stack sx={{ whiteSpace: "nowrap", minWidth: "110px" }}>{date}</Stack>
			<Stack sx={{ borderLeft: "1px solid", borderColor: "divider", pl: 2, flex: 1 }}>{children}</Stack>
		</Stack>
	);
};

export default NewsWrapper;
