import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import NavbarTop from "./components/NavbarTop";
import ESNavbar from "./components/Navbar";
import KitchenBath from "./components/KitchenBath";
import UniqueInstall from "./components/UniqueInstall";
import { Outlet } from "react-router-dom";
import PlanningCare from "./components/PlanningCare";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{ index: true, element: <Home /> },
			{ path: "kitchenBath", element: <KitchenBath /> },
			{ path: "uniqueInstall", element: <UniqueInstall /> },
			{ path: "planningCare", element: <PlanningCare /> },
			{ path: "ourServices", element: <OurServices /> },
			{ path: "aboutUs", element: <AboutUs /> },
		],
	},
]);
function App() {
	return (
		<>
			<NavbarTop></NavbarTop>
			<ESNavbar />
			<Outlet /> {/* Placeholder for child routes */}
			<Footer></Footer>
		</>
	);
}

export default App;
