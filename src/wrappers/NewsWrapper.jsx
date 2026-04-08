import { Stack } from "@mui/material";

const NewsWrapper = ({ children, date }) => {
	return (
		<Stack
			direction={"row"}
			sx={{
				alignItems: "center",
				height: "3rem",
				pb: 1,
				borderBottom: "1px solid",
				borderColor: "divider",
				fontSize: "0.95rem",
			}}
		>
			<Stack sx={{ whiteSpace: "nowrap", minWidth: { md: "110px", xs: "80px" }, fontSize: { xs: "0.8rem", md: "1rem" } }}>{date}</Stack>
			<Stack
				sx={{
					fontWeight: 400,
					flex: 1,
					"& > *": { display: "inline" },
				}}
			>
				{children}
			</Stack>
		</Stack>
	);
};

export default NewsWrapper;
