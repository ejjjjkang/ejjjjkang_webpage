import React, { useState } from "react";
import { Card, Stack, Button } from "@mui/material";
import styled from "styled-components";
import ButtonWrapper from "./ButtonWrapper";

const StyledCard = styled.a`
	text-decoration: none !important;
	color: #666666;
	font-size: 1em;
	font-weight: 300;
	z-index: 10;
	/* position: absolute; */
`;

const MiniCardWrapper = ({ title, img, content, link }) => {
	const [visible, setVisible] = useState(false);

	return (
		<Card variant="outline">
			<Stack direction={"row"} sx={{ p: 3, alignItems: "center" }}>
				<Stack sx={{ width: "20%", height: "100%", m: 2 }}>
					<img src={img}></img>
				</Stack>
				<Stack direction={"column"} sx={{ ml: 3 }}>
					<StyledCard>{title}</StyledCard>
					<StyledCard>{content}</StyledCard>
					<Stack sx={{ width: "20%" }}>
						<ButtonWrapper link={link} text={"More"}></ButtonWrapper>
					</Stack>
				</Stack>
			</Stack>
		</Card>
	);
};

export default MiniCardWrapper;
