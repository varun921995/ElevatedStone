import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ContactUsFooter = () => {
	return (
		<>
			<Container fluid className="mt-5" style={{ background: "#286dc8" }}>
				<Row style={{ padding: "15px 0px" }}>
					<Col className="text-center">
						<h1 className="text-white">
							How we can help?
							<Nav.Link as={NavLink} to="/contactUs">
								<Button
									variant="light"
									size="lg"
									className="d-none d-lg-inline-block rounded-0 mx-3">
									Contact Us
								</Button>
							</Nav.Link>
							{/* Small button for smaller screens */}
							<Nav.Link as={NavLink} to="/contactUs">
								<Button
									variant="light"
									size="sm"
									className="d-inline-block d-lg-none rounded-0 mx-2">
									Contact Us
								</Button>
							</Nav.Link>
						</h1>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ContactUsFooter;
