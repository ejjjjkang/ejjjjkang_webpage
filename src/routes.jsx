import App from "./App";
import EssayPage from "./sections/EssayPage";

export const routes = [
	{ path: "/", element: <App /> },
	{ path: "/essay/:id", element: <EssayPage /> },
];
