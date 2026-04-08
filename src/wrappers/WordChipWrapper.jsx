import { Stack } from "@mui/material";
import styled from "styled-components";

export const ConferenceChipWrapper = styled.span`
	background-color: #8a579c; /* Choose your color here */
	color: #ffffff; /* Set text color for contrast */
	padding: 2px 5px; /* Optional: add padding around the text */
	border-radius: 4px; /* Optional: add rounded corners */
	display: inline;
	margin-right: 5px;
`;

export const MenuItemWrapper = styled.span`
	font-weight: 900;
	text-transform: uppercase;
	font-size: 2em;
	--angle: 45deg;
	padding: 0.2em;
	background: linear-gradient(
		var(--angle),
		oklab(64% 0.221 -0.169),
		oklab(63.6% 0.238 -0.045),
		oklab(61% 0.207 0.083)
	);

	a {
		text-decoration: none !important;
		color: #ffffff;
	}
`;

export const HeaderWrapper = styled.h4`
	font-size: 1.2em;
	margin-bottom: 0.8em;

	&::after {
		content: "";
		display: block;
		width: 8rem;
		height: 4px;
		background-color: #158697;
		margin-top: 0.3em;
	}
`;

export const LinkWrapper = styled.a`
	text-decoration: none !important;
	color: #d6d6d6;
	font-size: 0.9rem;
`;

export const LinkChipWrapper = ({ children, link }) => {
	return (
		<Stack sx={{ p: 1 }}>
			<LinkWrapper href={link} target="_blank">
				{children}
			</LinkWrapper>
		</Stack>
	);
};
