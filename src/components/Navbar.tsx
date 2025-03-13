import { Button, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { CgNotes } from "react-icons/cg";

const ESNavbar = () => {
	return (
		<>
			<Navbar bg="light" variant="light" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Container>
						<Row>
							<Nav className="me-auto d-flex justify-content-evenly">
								{/* Render Nav.Link as React Router Link */}
								<Nav.Link as={NavLink} to="/" className="es-navbar">
									Home
								</Nav.Link>
								<Nav.Link as={NavLink} to="/kitchenBath" className="es-navbar">
									Kitchen and Bath Design
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to="/uniqueInstall"
									className="es-navbar">
									Unique Installs
								</Nav.Link>
								<Nav.Link as={NavLink} to="/planningCare" className="es-navbar">
									Planning & Care
								</Nav.Link>
								<Nav.Link as={NavLink} to="/ourServices" className="es-navbar">
									Our Services
								</Nav.Link>
								<Nav.Link as={NavLink} to="/aboutUs" className="es-navbar">
									About Us
								</Nav.Link>
								<Nav.Link as={NavLink} to="/contactUs" className="es-navbar">
									Contact Us
								</Nav.Link>
								<Nav.Link as={NavLink} to="/contactUs">
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
