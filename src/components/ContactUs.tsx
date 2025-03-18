import { Container } from "react-bootstrap";
import ContactUsForm from "./Partials/ContactUsForm";
import { useState, useLayoutEffect } from "react";

const ContactUs = () => {
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
					<div className="pageHeading text-center">CONTACT US</div>
				</Container>
			</div>
			<Container>
				<ContactUsForm />
			</Container>
		</>
	);
};

export default ContactUs;
