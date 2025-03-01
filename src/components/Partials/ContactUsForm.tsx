import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import axios from "axios";
interface FormErrors {
	name?: string;
	email?: string;
	file?: string;
}

const ContactUsForm = () => {
	const [attachment, setAttachment] = useState<File | null>(null);
	const [formData, setFormData] = useState({
		name: "",
		replyToEmail: "",
		message: "",
		attachment: {},
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [success, setSuccess] = useState(false);

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const validate = () => {
		let newErrors: FormErrors = {};
		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.replyToEmail.trim()) newErrors.email = "Email is required";
		else if (!emailRegex.test(formData.replyToEmail))
			newErrors.email = "Invalid email format";
		return newErrors;
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file && file.type === "application/pdf") {
			setAttachment(file);
		} else {
			console.log("Invalid file format");
		}
	};

	const convertFileToBase64 = (
		file: File,
	): Promise<{ filename: string; base64Content: string }> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			console.log("hi---2");
			reader.onload = () => {
				const base64String = reader.result as string;
				resolve({
					filename: file.name,
					base64Content: base64String.split(",")[1], // Extract Base64 content
				});
			};

			reader.onerror = () => reject(new Error("Error reading file"));

			reader.readAsDataURL(file);
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setSuccess(false);
		} else {
			let fileData = null;
			if (attachment) {
				try {
					fileData = await convertFileToBase64(attachment);
				} catch (error) {
					console.log(error);
				}
			}

			await sendForm(fileData);
			setFormData({ name: "", replyToEmail: "", message: "", attachment: {} });
		}
	};

	const sendForm = async (
		fileData: { filename: string; base64Content: string } | null,
	) => {
		setFormData({ ...formData, attachment: fileData ? fileData : {} });
		const payload = JSON.stringify(formData);

		try {
			const response = await axios.post(
				"https://qxiumqpro0.execute-api.us-east-2.amazonaws.com/sendEmail",
				payload,
				{
					headers: { "Content-Type": "application/json" },
				},
			);

			if (response.status === 200) {
				setSuccess(true);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container className="mt-4">
			{success && <Alert variant="success">Form submitted successfully!</Alert>}
			<Form onSubmit={handleSubmit} noValidate>
				<Form.Group controlId="formName" className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your name"
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						isInvalid={!!errors.name}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.name}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="formEmail" className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter your email"
						value={formData.replyToEmail}
						onChange={(e) =>
							setFormData({ ...formData, replyToEmail: e.target.value })
						}
						isInvalid={!!errors.email}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.email}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="formMessage" className="mb-3">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Write your message..."
						value={formData.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
					/>
				</Form.Group>

				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Attachment</Form.Label>
					<Form.Control
						type="file"
						accept="application/pdf"
						onChange={handleFileChange}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};
export default ContactUsForm;
