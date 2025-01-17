import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import NavbarTop from "./components/NavbarTop";
import ESNavbar from "./components/Navbar";
import KitchenBath from "./components/KitchenBath";
import UniqueInstall from "./components/UniqueInstall";
import NotFound from "./components/Partials/NotFound";
import { Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import PlanningCare from "./components/PlanningCare";
import OurServices from "./components/OurServices";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/kitchenBath", element: <KitchenBath /> },
			{ path: "/uniqueInstall", element: <UniqueInstall /> },
			{ path: "/planningCare", element: <PlanningCare /> },
			{ path: "/ourServices", element: <OurServices /> },
		],
	},
]);
function App() {
	return (
		<>
			<NavbarTop></NavbarTop>
			<ESNavbar />
			<Outlet /> {/* Placeholder for child routes */}
		</>
	);
}

export default App;
