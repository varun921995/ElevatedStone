import { Col, Container, Row } from "react-bootstrap";

const PlanningCare = () => {
	return (
		<>
			<Container className="my-4">
				<div className="pageHeading">
					<h1>Planning and Care</h1>
				</div>
			</Container>
			<Container>
				<Row>
					<Col>
						<p className="our-services-text">
							At Elevated Stone Design Inc., our Customer Care Strategy is
							centred around creating exceptional experiences for our clients
							through every phase of their journey with us. We prioritize
							quality control with thorough inspections and client approval
							processes, ensuring that every project meets our high standards.
						</p>
						<p className="our-services-text">
							Our commitment to customer satisfaction is reflected in our
							proactive approach to gathering feedback via emails and social
							media, allowing us to continuously improve our services. We
							leverage advanced tools like Salesforce and Excel to efficiently
							manage warranty claims, ensuring timely and effective resolutions.
						</p>
						<p className="our-services-text">
							Our team is dedicated to providing personalized support, with a
							focus on clear communication and responsiveness to client needs.
							In addition to our robust support systems, we are committed to
							engaging with our customers through various channels. We utilize
							social media platforms like Instagram to connect with our
							audience, and we are excited to explore new marketing platforms to
							enhance our reach. Our upcoming website launch will further
							facilitate customer interaction, featuring a contact form and
							messaging system to streamline communication. With a strong
							emphasis on safety and professionalism, we ensure that all crew
							members are trained in necessary safety protocols, backed by
							comprehensive insurance coverage. Our Customer Care Strategy is
							integral to our mission of delivering premium stone fabrication
							and installation services across the Maritime provinces and
							Quebec, as we aim to expand our footprint and achieve our
							ambitious growth goals.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default PlanningCare;
