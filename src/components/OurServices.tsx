import { Col, Container, Image, Row } from "react-bootstrap";
import OurServicesData from "../data/OurServicesData";
import { useLayoutEffect, useState } from "react";
import ContactUsFooter from "./Partials/ContactUsFooter";
const OurServices = () => {
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
					<div className="pageHeading text-center">OUR SERVICES</div>
				</Container>
			</div>
			<div className="background-wrapper">
				{OurServicesData.map((service) => (
					<div key={service.id}>
						{service.id % 2 === 1 ? (
							<Container className="my-4">
								<Row>
									<Col>
										<span className="subHeading">{service.heading}</span>
										<br />
										<p className="text">{service.text}</p>
									</Col>
									<Col xs={12} sm={12} md={6}>
										<div className="zoom-img">
											<Image src={service.image} className="es-image "></Image>
										</div>
									</Col>
								</Row>
							</Container>
						) : (
							<Container className="my-4">
								<Row>
									<Col xs={12} sm={12} md={6}>
										<div className="zoom-img">
											<Image src={service.image} className="es-image "></Image>
										</div>
									</Col>
									<Col>
										<span className="subHeading">{service.heading}</span>
										<br />
										<p className="text">{service.text}</p>
									</Col>
								</Row>
							</Container>
						)}
						{service.id !== OurServicesData.length && (
							<Container className="my-5">
								<hr></hr>
							</Container>
						)}
					</div>
				))}
			</div>
			<ContactUsFooter></ContactUsFooter>
		</>
	);
};

export default OurServices;
