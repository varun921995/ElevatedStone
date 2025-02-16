import { Button, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { CgNotes } from "react-icons/cg";

const ESNavbar = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Container>
						<Row>
							<Nav className="me-auto d-flex justify-content-evenly">
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
								<Button className="mx-3" variant="btn btn-outline-warning">
									<CgNotes className="mx-1" />
									Get Quote
								</Button>
							</Nav>
						</Row>
					</Container>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default ESNavbar;
