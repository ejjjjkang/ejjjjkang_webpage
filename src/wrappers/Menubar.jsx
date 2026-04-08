import { Stack } from "@mui/material";
import "./index.css";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const NavLink = styled(HashLink)`
	text-decoration: none;
	color: #555;
	font-size: 0.95rem;
	font-weight: 400;
	padding: 0 0.75rem;

	&:hover {
		color: #000;
	}
`;

const Menubar = () => {
	return (
		<Stack
			direction={"row"}
			justifyContent={"center"}
			alignItems={"center"}
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 3,
				backgroundColor: "rgba(255,255,255,0.9)",
				backdropFilter: "blur(6px)",
				borderBottom: "1px solid #eee",
				py: 1.5,
			}}
		>
			<NavLink smooth to="/#me">
				About
			</NavLink>
			<NavLink smooth to="/#publications">
				Research
			</NavLink>
			<NavLink smooth to="/#projects">
				Projects
			</NavLink>
			<NavLink smooth to="/#resource">
				Resource
			</NavLink>
		</Stack>
	);
};

export default Menubar;
