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
			<Container className="my-4">
				<div className="pageHeading">
					<h1>Contact Us</h1>
				</div>
			</Container>
			<Container>
				<ContactUsForm />
			</Container>
		</>
	);
};

export default ContactUs;
