import { NavbarText } from "react-bootstrap";
import logo from "../assets/img/elevatedStone-logo.jpeg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavbarTop = () => {
	return (
		<div>
			<Navbar className="esNavbar" variant={"dark"}>
				<Container fluid className="d-flex justify-content-center">
					<Navbar.Brand href="#home">
						<img alt="" src={logo} className="logo d-inline-block align-top" />
						<NavbarText>Elevated Stone Design</NavbarText>
					</Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarTop;
