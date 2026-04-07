import { Box, Menu, Stack, Typography } from "@mui/material";
import "./index.css";
import { MenuItemWrapper } from "./WordChipWrapper";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Menubar = () => {
	return (
		<Stack
			direction={"column"}
			alignItems={"flex-end"}
			sx={{ position: "fixed", right: "18%", zIndex: 3, opacity: 0.8 }}
		>
			<MenuItemWrapper>
				<HashLink smooth to="/#me">
					About
				</HashLink>
			</MenuItemWrapper>
			<MenuItemWrapper>
				<HashLink smooth to="/#publications">
					Publications
				</HashLink>
			</MenuItemWrapper>
			{/* <MenuItemWrapper>
				<Link to="/#reading-list">Reading List</Link>
			</MenuItemWrapper> */}
			{/* <MenuItemWrapper>
				<Link to="/#fun-project">Fun Projects</Link>
			</MenuItemWrapper> */}
			<MenuItemWrapper>
				<HashLink smooth to="/#news">
					News
				</HashLink>
			</MenuItemWrapper>
		</Stack>
	);
};

export default Menubar;
