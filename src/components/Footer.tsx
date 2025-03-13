import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "/img/logo.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<>
			<Container fluid>
				<Row className="bg-light p-4">
					<Col className="my-3 mx-5">
						<h2 className="footer-company-title">
							<Image className="logo" src={logo}></Image>{" "}
							<span style={{ padding: "10% 0%" }}>Elevated Stone</span>
						</h2>
					</Col>
					<Col className="my-3 mx-5">
						<Nav className="flex-column fs-5">
							{/* Render Nav.Link as React Router Link */}
							<Nav.Link as={NavLink} to="/" className="es-navbar">
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to="/kitchenBath" className="es-navbar">
								Kitchen and Bath Design
							</Nav.Link>
							<Nav.Link as={NavLink} to="/uniqueInstall" className="es-navbar">
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
						</Nav>
					</Col>
					<Col className="my-3 mx-5">
						<h4 className="footer-text">Contact Us</h4>
						<p className="footer-text">Email : admin@elevatedstone.ca</p>
						<a
							href="https://www.instagram.com/elevated_stone_design/"
							className="mx-2">
							<FaSquareInstagram size={35} />
						</a>
						<a href="https://www.linkedin.com/company/elevated-stone-design/">
							<BsLinkedin size={32} />
						</a>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Footer;
