import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const ESNavbar = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{/* Render Nav.Link as React Router Link */}
						<Nav.Link as={NavLink} to="/" color="white">
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/kitchenBath">
							Kitchen and Bath Design
						</Nav.Link>
						<Nav.Link as={NavLink} to="/uniqueInstall">
							Unique Installs
						</Nav.Link>
						<Nav.Link as={NavLink} to="/planningCare">
							Planning & Care
						</Nav.Link>
						<Nav.Link as={NavLink} to="/ourServices">
							Our Services
						</Nav.Link>
						<Nav.Link as={NavLink} to="/aboutUs">
							About Us
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default ESNavbar;
