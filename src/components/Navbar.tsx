import { Button, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { useState } from "react";

const ESNavbar = () => {
	const [expanded, setExpanded] = useState(false);
	const handleNavItemClick = () => {
		setExpanded(false); // Close the navbar when a nav item is clicked
	};
	return (
		<>
			<Navbar bg="light" variant="light" expand="lg" expanded={expanded}>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="mx-2"
					onClick={() => setExpanded(expanded ? false : true)}
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Container>
						<Row>
							<Nav className="me-auto d-flex justify-content-evenly">
								{/* Render Nav.Link as React Router Link */}
								<Nav.Link
									as={NavLink}
									to="/"
									className="es-navbar"
									onClick={handleNavItemClick}>
									Home
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/kitchenBath"
									className="es-navbar"
									onClick={handleNavItemClick}>
									Kitchen and Bath Design
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/uniqueInstall"
									className="es-navbar"
									onClick={handleNavItemClick}>
									Unique Installs
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/planningCare"
									className="es-navbar"
									onClick={handleNavItemClick}>
									Planning & Care
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/ourServices"
									className="es-navbar"
									onClick={handleNavItemClick}>
									Our Services
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/aboutUs"
									className="es-navbar"
									onClick={handleNavItemClick}>
									About Us
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/contactUs"
									className="es-navbar"
									onClick={handleNavItemClick}>
									Contact Us
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/contactUs"
									onClick={handleNavItemClick}>
									<Button className="mx-3" variant="btn btn-outline-primary">
										<CgNotes className="mx-1" />
										Get Quote
									</Button>
								</Nav.Link>
							</Nav>
						</Row>
					</Container>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default ESNavbar;
