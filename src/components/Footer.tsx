import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "/img/update_logo.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<>
			<Container fluid>
				<Row
					xs={12}
					className="es-navbar p-4 d-flex align-items-center justify-content-center ">
					<Col xs={12} sm={6} md={4} className="my-3">
						<Row className="align-items-center">
							<Col xs={2}>
								<Image className="logo" src={logo}></Image>
							</Col>
						</Row>
						{/* <h2 className="footer-company-title">
							
						
						</h2> */}
					</Col>
					<Col xs={12} sm={6} md={4} className="my-3">
						<Nav className="flex-column fs-6">
							{/* Render Nav.Link as React Router Link */}
							<Nav.Link as={NavLink} to="/" className="nav-text">
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to="/kitchenBath" className="nav-text">
								Kitchen and Bath Design
							</Nav.Link>
							<Nav.Link as={NavLink} to="/uniqueInstall" className="nav-text">
								Unique Installs
							</Nav.Link>
							<Nav.Link as={NavLink} to="/planningCare" className="nav-text">
								Planning & Care
							</Nav.Link>
							<Nav.Link as={NavLink} to="/ourServices" className="nav-text">
								Our Services
							</Nav.Link>
							<Nav.Link as={NavLink} to="/aboutUs" className="nav-text">
								About Us
							</Nav.Link>
						</Nav>
					</Col>
					<Col xs={12} sm={6} md={4} className="my-3">
						<h6 className="footer-text fs-6">Contact Us</h6>
						<p className="footer-text fs-6">Email : admin@elevatedstone.ca</p>
						<a
							href="https://www.instagram.com/elevated_stone_design/"
							className="mx-2 ">
							<FaSquareInstagram size={35} color="#ddd9d1" />
						</a>
						<a href="https://www.linkedin.com/company/elevated-stone-design/">
							<BsLinkedin size={32} color="#ddd9d1" />
						</a>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Footer;
