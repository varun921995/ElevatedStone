import { Image, NavbarText, Row } from "react-bootstrap";
import logo from "/img/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavbarTop = () => {
	return (
		<div>
			<Navbar className="bg-light" variant={"light"}>
				<Container fluid className="d-flex justify-content-center">
					<Row>
						<Navbar.Brand href="#home">
							<Image
								alt=""
								src={logo}
								className="logo d-inline-block align-top"
							/>
							<NavbarText className="esTitle">Elevated Stone Design</NavbarText>
						</Navbar.Brand>
					</Row>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarTop;
