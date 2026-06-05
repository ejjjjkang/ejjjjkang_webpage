import { Stack } from "@mui/material";
import profile from "../sources/avatar.jpg";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import { TbFileCv } from "react-icons/tb";
import { LinkChipWrapper } from "../wrappers/WordChipWrapper";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ProfileWrapper = () => {
	return (
		<Stack direction={"column"}>
			<img style={{ borderRadius: "50%" }} src={profile} alt="profile" />
			<Stack
				direction={"row"}
				justifyContent={"space-evenly"}
				sx={{ pt: 3, color: "#bababa" }}
			>
				<LinkChipWrapper link="mailto:ek646@cornell.edu">
					<EmailIcon fontSize="large" />
				</LinkChipWrapper>
				<LinkChipWrapper link="https://scholar.google.com/citations?user=HHbjdykAAAAJ&hl=en&oi=ao">
					<SchoolIcon fontSize="large" />
				</LinkChipWrapper>
				<LinkChipWrapper link="https://docs.google.com/document/d/1qHcXlC2tz-_s7MbvZIfg-cwp5LtR9dXpFsYHLS_Tc6Q/edit?usp=sharing">
					<TbFileCv size={35} />
				</LinkChipWrapper>
				<LinkChipWrapper link="www.linkedin.com/in/ejeunkang">
					<LinkedInIcon fontSize="large" />
				</LinkChipWrapper>
			</Stack>
		</Stack>
	);
};

export default ProfileWrapper;
