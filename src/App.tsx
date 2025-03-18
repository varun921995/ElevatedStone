import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";
import {  createHashRouter } from "react-router-dom";
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
import ContactUs from "./components/ContactUs";

export const Router = createHashRouter([
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
			{ path: "contactUs", element: <ContactUs /> },
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
