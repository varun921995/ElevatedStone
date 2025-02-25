import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "/img/logo.png";

const Footer = () => {
	return (
		<>
			<Container fluid>
				<Row className="bg-light p-4">
					<Col className="my-3 mx-5">
						<Image className="logo" src={logo}></Image>
						<h2 className="footer-company-title">Elevated Stone</h2>
					</Col>
					<Col className="my-3 mx-5">
						<Nav className="flex-column fs-5">
							{/* Render Nav.Link as React Router Link */}
							<Nav.Link as={NavLink} to="/">
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
					</Col>
					<Col className="my-3 mx-5">
						<h4 className="footer-text">Contact Us</h4>
						<p className="footer-text">Email : admin@elevatedstone.ca</p>
						<p className="footer-text">Phone : xxxxxxxxxxx</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Footer;
