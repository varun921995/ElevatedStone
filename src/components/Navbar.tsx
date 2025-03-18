import { Button, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { useState } from "react";
import { HiMiniBars4 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const ESNavbar = () => {
	const [expanded, setExpanded] = useState(false);
	const handleNavItemClick = () => {
		setExpanded(false); // Close the navbar when a nav item is clicked
	};
	return (
		<>
			<Navbar className="es-navbar" expand="lg" expanded={expanded}>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="mx-2"
					onClick={() => setExpanded(expanded ? false : true)}>
					{expanded ? (
						<LiaTimesSolid size={30} color="white" />
					) : (
						<HiMiniBars4 size={30} color="white" />
					)}
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Container>
						<Row>
							<Nav className="me-auto d-flex justify-content-evenly align-items-center">
								{/* Render Nav.Link as React Router Link */}
								<Nav.Link
									as={NavLink}
									to="/"
									className="nav-text"
									onClick={handleNavItemClick}>
									Home
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/kitchenBath"
									className="nav-text"
									onClick={handleNavItemClick}>
									Kitchen and Bath Design
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/uniqueInstall"
									className="nav-text"
									onClick={handleNavItemClick}>
									Unique Installs
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/planningCare"
									className="nav-text"
									onClick={handleNavItemClick}>
									Planning & Care
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/ourServices"
									className="nav-text"
									onClick={handleNavItemClick}>
									Our Services
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/aboutUs"
									className="nav-text"
									onClick={handleNavItemClick}>
									About Us
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/contactUs"
									className="nav-text"
									onClick={handleNavItemClick}>
									Contact Us
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/contactUs"
									onClick={handleNavItemClick}>
									<Button className="mx-1" variant="btn btn-outline-light">
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
