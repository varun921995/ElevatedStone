import React, { useRef, useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import axios from "axios";
interface FormErrors {
	name?: string;
	email?: string;
	file?: string;
	subject?: string;
	message?: string;
}

const ContactUsForm = () => {
	const [isValidAttachment, setIsValidAttachment] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		replyToEmail: "",
		subject: "",
		message: "",
		attachment: {},
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [success, setSuccess] = useState(false);
	const inputFile = useRef<HTMLInputElement>(null);
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const validate = () => {
		let newErrors: FormErrors = {};
		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.replyToEmail.trim()) newErrors.email = "Email is required";
		else if (!emailRegex.test(formData.replyToEmail))
			newErrors.email = "Invalid email format";
		if (!formData.subject.trim()) newErrors.subject = "Subject is required";
		if (!formData.message.trim()) newErrors.message = "Message is required";
		if (!isValidAttachment) {
			newErrors.file = "Invalid file format";
		}
		return newErrors;
	};

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = event.target.files?.[0];
		let fileData = null;
		if (file && file.type === "application/pdf") {
			setIsValidAttachment(true);
			fileData = await convertFileToBase64(file);
			setFormData({ ...formData, attachment: fileData });
		} else if (file && file.type != "application/pdf") {
			setIsValidAttachment(false);
			console.log("Invalid file format");
		} else {
			setIsValidAttachment(true);
			setFormData({ ...formData, attachment: {} });
		}
	};

	const convertFileToBase64 = (
		file: File,
	): Promise<{ filename: string; base64Content: string }> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();

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

		try {
			setIsLoading(true);
			const validationErrors = validate();

			if (Object.keys(validationErrors).length > 0) {
				console.log(validationErrors);
				setErrors(validationErrors);
				setSuccess(false);
			} else {
				await sendForm();
				setFormData({
					name: "",
					replyToEmail: "",
					subject: "",
					message: "",
					attachment: {},
				});
				setErrors({});
				if (inputFile.current) {
					inputFile.current.type = "text";
					inputFile.current.value = ""; // Temporarily change type
					inputFile.current.type = "file";
				}
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const sendForm = async () => {
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
				setTimeout(() => {
					setSuccess(false);
				}, 5000);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Container className="my-4">
			{success && <Alert variant="success">Form submitted successfully!</Alert>}
			<Form onSubmit={handleSubmit} noValidate>
				<Form.Group controlId="formName" className="mb-3">
					<Form.Label className="text">Name</Form.Label>
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
					<Form.Label className="text">Email</Form.Label>
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
				<Form.Group controlId="formSubject" className="mb-3">
					<Form.Label className="text">Subject</Form.Label>
					<Form.Control
						type="text"
						placeholder="Subject"
						value={formData.subject}
						onChange={(e) =>
							setFormData({ ...formData, subject: e.target.value })
						}
						isInvalid={!!errors.subject}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.subject}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="formMessage" className="mb-3">
					<Form.Label className="text">Message</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Write your message..."
						value={formData.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
						isInvalid={!!errors.message}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.message}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label className="text">
						Attachment (Only .pdf format)
					</Form.Label>
					<Form.Control
						type="file"
						accept="application/pdf"
						ref={inputFile}
						onChange={handleFileChange}
					/>
				</Form.Group>

				<Button variant="light" type="submit" disabled={isLoading}>
					{isLoading ? "submiting" : "Submit"}
				</Button>
			</Form>
		</Container>
	);
};
export default ContactUsForm;
