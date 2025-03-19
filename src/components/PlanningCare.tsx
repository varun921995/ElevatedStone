import { Col, Container, Row } from "react-bootstrap";
import ContactUsFooter from "./Partials/ContactUsFooter";
import { useState, useLayoutEffect } from "react";

const PlanningCare = () => {
	const [isReady, setIsReady] = useState(false);
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
		setIsReady(true); // Ensures the page starts at the top
	}, []);

	if (!isReady) return null;
	return (
		<>
			<div className="page-heading-wrapper">
				<Container>
					<div className="pageHeading text-center">PLANNING & CARE</div>
				</Container>
			</div>
			<div className="background-wrapper">
				<Container>
					<Row>
						<Col>
							<p className="text">
								At Elevated Stone Design, our Customer Care Strategy is
								centred around creating exceptional experiences for our clients
								through every phase of their journey with us. We prioritize
								quality control with thorough inspections and client approval
								processes, ensuring that every project meets our high standards.
							</p>
							<p className="text">
								Our commitment to customer satisfaction is reflected in our
								proactive approach to gathering feedback via emails and social
								media, allowing us to continuously improve our services. We
								leverage advanced tools like Salesforce and Excel to efficiently
								manage warranty claims, ensuring timely and effective
								resolutions.
							</p>
							<p className="text">
								Our team is dedicated to providing personalized support, with a
								focus on clear communication and responsiveness to client needs.
								In addition to our robust support systems, we are committed to
								engaging with our customers through various channels. We utilize
								social media platforms like Instagram to connect with our
								audience, and we are excited to explore new marketing platforms
								to enhance our reach. Our upcoming website launch will further
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
			</div>
			<ContactUsFooter></ContactUsFooter>
		</>
	);
};

export default PlanningCare;
