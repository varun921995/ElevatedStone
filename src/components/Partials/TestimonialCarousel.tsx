import { Carousel, Card, Row, Col } from "react-bootstrap";
import Testimonials from "../../data/Testimonials";

const TestimonialCarousel = () => {
	const testimonialsPerSlide = 2;

	// Split testimonials into chunks of two for each slide
	const testimonialChunks = [];
	for (let i = 0; i < Testimonials.length; i += testimonialsPerSlide) {
		testimonialChunks.push(Testimonials.slice(i, i + testimonialsPerSlide));
	}

	return (
		<Carousel
			interval={6000}
			fade
			indicators={false}
			prevIcon={null}
			nextIcon={null}>
			{testimonialChunks.map((chunk, index) => (
				<Carousel.Item key={index}>
					<Row className="justify-content-center">
						{chunk.map((testimonial) => (
							<Col
								xs={12}
								md={6}
								key={testimonial.id}
								className="d-flex justify-content-center mb-3">
								<Card
									className="text-center rounded-3" // Adding rounded corners
									style={{
										backgroundColor: "#3d6dac", // Light background color (you can choose any color)
										overflow: "hidden",
										width: "100%",
										minHeight: "300px",
										maxHeight: "max-content", // Make the card's height equal to its width
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: adds a soft shadow for better visual depth
									}}>
									<Card.Body className="text-white">
										<Card.Title style={{ textTransform: "uppercase" }}>
											<b>{testimonial.title}</b>
										</Card.Title>
										<hr></hr>
										<Card.Text className="our-services-text">
											{testimonial.text}
										</Card.Text>
										<Card.Text className="our-services-text">
											<i>
												<b>- {testimonial.name}</b>
											</i>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default TestimonialCarousel;
