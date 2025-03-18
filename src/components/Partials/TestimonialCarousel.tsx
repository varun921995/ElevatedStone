import { Carousel, Card, Row, Col } from "react-bootstrap";
import Testimonials from "../../data/Testimonials";
const TestimonialCarousel = () => {
	return (
		<Carousel
			interval={6000}
			fade
			indicators={false}
			prevIcon={null}
			nextIcon={null}>
			{Testimonials.map((item, index) => (
				<Carousel.Item key={index}>
					<Row className="justify-content-center">
						<Col
							xs={12}
							md={12}
							key={item.id}
							className="d-flex justify-content-center mb-3">
							<Card className="text-center rounded-3 testimonial-card ">
								<Card.Body>
									<Card.Title style={{ textTransform: "uppercase" }}>
										<b>{item.title}</b>
									</Card.Title>
									<hr></hr>
									<Card.Text className="text dark-text ">{item.text}</Card.Text>
									<Card.Text className="text dark-text ">
										<i>
											<b>- {item.name}</b>
										</i>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default TestimonialCarousel;
