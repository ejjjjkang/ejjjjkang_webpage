import { Card } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const CardWrapper = ({ children }) => {
	return (
		<Card variant="outline" sx={{ p: { xs: 1, md: 2 }, m: { xs: 0.5, md: 1 }, width: "100%" }}>
			<Fade>{children}</Fade>
		</Card>
	);
};

export default CardWrapper;
