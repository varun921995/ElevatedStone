import { Container } from "react-bootstrap";
import ContactUsForm from "./Partials/ContactUsForm";

const ContactUs = () => {
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
