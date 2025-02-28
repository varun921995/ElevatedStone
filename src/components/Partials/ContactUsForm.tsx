import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactUsForm = () => {
	return (
		<Form>
			<Form.Group className="mb-3" controlId="formName">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" placeholder="Enter name" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formTextArea">
				<Form.Label>Example textarea</Form.Label>
				<Form.Control as="textarea" rows={3} />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default ContactUsForm;
