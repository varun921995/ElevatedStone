import { Image, Row } from "react-bootstrap";
import logo from "/img/update_logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavbarTop = () => {
	return (
		<div>
			<Navbar className="es-navbar" variant={"dark"}>
				<Container fluid className="d-flex justify-content-center">
					<Row>
						<Navbar.Brand href="#home">
							<Image
								alt=""
								src={logo}
								className="logo d-inline-block align-top"
							/>
						</Navbar.Brand>
					</Row>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarTop;
