import { Stack, Container } from "@mui/material";
import "./App.css";
import Menubar from "./wrappers/Menubar";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
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
			sx={{ position: "relative", backgroundColor: "white" }}
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

				{/* <ReadingList /> */}
				<Divider />
				<DailyLog />
			</Stack>
		</Container>
	);
}

export default App;
