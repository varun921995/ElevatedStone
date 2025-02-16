import { Col, Container, Image, Row } from "react-bootstrap";
import OurServicesData from "../data/OurServicesData";
const OurServices = () => {
	return (
		<>
			<Container className="my-4">
				<Row>
					<Col>
						<div className="pageHeading">
							<h1>Our Services</h1>
						</div>
					</Col>
				</Row>
			</Container>
			{OurServicesData.map((service) => (
				<div key={service.id}>
					{service.id % 2 === 1 ? (
						<Container className="my-4">
							<Row>
								<Col>
									<span className="our-services-subHeading">
										{service.heading}
									</span>
									<br />
									<p className="our-services-text">{service.text}</p>
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
									<span className="our-services-subHeading">
										{service.heading}
									</span>
									<br />
									<p className="our-services-text">{service.text}</p>
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
		</>
	);
};

export default OurServices;
