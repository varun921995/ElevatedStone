import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ContactUsFooter = () => {
	return (
		<>
			<Container fluid className="mt-5 page-footer-wrapper">
				<Row
					xs={12}
					className="d-flex justify-content-center align-items-center py-5">
					<Col
						xs={12}
						sm={6}
						className="text-center d-flex justify-content-center align-items-center gap-3 flex-wrap">
						{/* Responsive Font Size */}
						<h1 className="mb-0 dynamic-heading">How we can help?</h1>

						{/* Large Button for Desktop */}
						<Nav.Link as={NavLink} to="/contactUs">
							<Button
								variant="dark"
								size="lg"
								className="d-none d-lg-inline-block rounded-0">
								Contact Us
							</Button>
						</Nav.Link>

						{/* Small Button for Mobile */}
						<Nav.Link as={NavLink} to="/contactUs">
							<Button
								variant="dark"
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
