import { Stack, Container } from "@mui/material";
import "./App.css";
import Menubar from "./wrappers/Menubar";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Resource from "./sections/Resource";
import DailyLog from "./sections/DailyLog";
import Main from "./sections/Main";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { ReadingList } from "./sections/ReadingList";
import Divider from "@mui/material/Divider";

function App() {
	return (
		<Container
			className="inter-500"
			id="me"
			sx={{ position: "relative", backgroundColor: "white", pt: "56px" }}
		>
			<ScrollToHashElement behavior="smooth" />
			<Menubar />
			<Stack direction={"column"}>
				<Main />
				<Divider />
				{/* <AboutMe /> */}
				<Divider />
				<Projects />
				<Divider />
				<AboutMe />
				<Divider />
				<Resource />
				{/* <ReadingList /> */}
				{/* <DailyLog /> */}
			</Stack>
			<Stack
				component="footer"
				sx={{
					borderTop: "1px solid #eee",
					py: 3,
					mt: 4,
					textAlign: "center",
					color: "#999",
					fontSize: "0.85rem",
				}}
			>
				© {new Date().getFullYear()} Eun Jeong Kang. All rights reserved.
			</Stack>
		</Container>
	);
}

export default App;
