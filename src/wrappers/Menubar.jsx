import { Stack, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
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

const DrawerLink = styled(HashLink)`
	text-decoration: none;
	color: #333;
	font-size: 1.1rem;
	font-weight: 400;
	padding: 0.5rem 0;
	display: block;
`;

const navItems = [
	{ label: "About", to: "/#me" },
	{ label: "Research", to: "/#publications" },
	{ label: "Studies", to: "/#studies" },
	{ label: "Projects", to: "/#projects" },
	{ label: "Resource", to: "/#resource" },
];

const Menubar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
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
				{/* Desktop nav */}
				<Stack
					direction="row"
					sx={{ display: { xs: "none", md: "flex" } }}
				>
					{navItems.map((item) => (
						<NavLink key={item.label} smooth to={item.to}>
							{item.label}
						</NavLink>
					))}
				</Stack>

				{/* Mobile hamburger */}
				<Stack
					direction="row"
					justifyContent="flex-end"
					sx={{ display: { xs: "flex", md: "none" }, width: "100%", px: 2 }}
				>
					<IconButton onClick={() => setOpen(true)}>
						<MenuIcon />
					</IconButton>
				</Stack>
			</Stack>

			{/* Mobile drawer */}
			<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
				<List sx={{ width: 200, pt: 4, px: 3 }}>
					{navItems.map((item) => (
						<ListItem key={item.label} disablePadding>
							<DrawerLink smooth to={item.to} onClick={() => setOpen(false)}>
								{item.label}
							</DrawerLink>
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
};

export default Menubar;
