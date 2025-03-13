import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ContactUsFooter = () => {
	return (
		<>
			<Container fluid className="mt-5" style={{ background: "#286dc8" }}>
				<Row
					xs={12}
					className="d-flex justify-content-center align-items-center py-5">
					<Col
						xs={12}
						sm={6}
						className="text-center d-flex justify-content-center align-items-center gap-3 flex-wrap">
						{/* Responsive Font Size */}
						<h1 className="text-white mb-0 dynamic-heading">
							How we can help?
						</h1>

						{/* Large Button for Desktop */}
						<Nav.Link as={NavLink} to="/contactUs">
							<Button
								variant="light"
								size="lg"
								className="d-none d-lg-inline-block rounded-0">
								Contact Us
							</Button>
						</Nav.Link>

						{/* Small Button for Mobile */}
						<Nav.Link as={NavLink} to="/contactUs">
							<Button
								variant="light"
								size="sm"
								className="d-inline-block d-lg-none rounded-0">
								Contact Us
							</Button>
						</Nav.Link>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ContactUsFooter;
