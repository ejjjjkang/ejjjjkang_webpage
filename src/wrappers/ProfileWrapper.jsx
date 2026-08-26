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
				<LinkChipWrapper link="mailto:ek646@cornell.edu" label="Email">
					<EmailIcon fontSize="large" />
				</LinkChipWrapper>
				<LinkChipWrapper
					link="https://scholar.google.com/citations?user=HHbjdykAAAAJ&hl=en&oi=ao"
					label="Google Scholar"
				>
					<SchoolIcon fontSize="large" />
				</LinkChipWrapper>
				<LinkChipWrapper link="/cv.pdf" label="Curriculum Vitae (PDF)">
					<Stack
						direction={"row"}
						alignItems={"center"}
						sx={{ gap: 0.5 }}
					>
						<TbFileCv size={35} />
						<span>CV</span>
					</Stack>
				</LinkChipWrapper>
				<LinkChipWrapper
					link="https://www.linkedin.com/in/ejeunkang"
					label="LinkedIn"
				>
					<LinkedInIcon fontSize="large" />
				</LinkChipWrapper>
			</Stack>
		</Stack>
	);
};

export default ProfileWrapper;
