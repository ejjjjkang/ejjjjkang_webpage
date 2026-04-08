import { Stack } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Wrapper = ({ children }) => {
	return (
		<Stack direction="column" sx={{ overflow: "auto", p: 5, pt: 3 }}>
			{children}
		</Stack>
	);
};

export default Wrapper;
