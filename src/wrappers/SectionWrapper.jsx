import { Stack } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Wrapper = ({ children }) => {
	return (
		<Stack direction="column" sx={{ overflow: "auto", p: { xs: 2, md: 5 }, pt: { xs: 2, md: 3 } }}>
			{children}
		</Stack>
	);
};

export default Wrapper;
