import { Carousel, Card, Row, Col } from "react-bootstrap";

const testimonials = [
	{
		id: 1,
		name: "Debbie and Les Denney",
		text: "Our counter tops are amazing along with the backsplash. The job was done with care and pride. And done quickly and very efficient. Recommend Stone Hammer Homes if you want an excellent and beautiful job done. Thanks so much for our beautiful kitchen.",
		title: "The job was done with care and pride.",
	},
	{
		id: 2,
		name: "Peter and Glenda Goguen",
		text: "If you are looking for quality stone counter top installs this is your guy. As you can see in the pics the work he did for me was top notch. Highly recommended.",
		title: "The work he did for me was top notch",
	},
	{
		id: 3,
		name: "Joan Aucoin",
		text: "Love my new counter top beautiful, highly recommend.",
		title: "I would highly recommend",
	},
	{
		id: 4,
		name: "Shelley Jones",
		text: "What I loved the most is how organized this process was. I felt comfortable with the time line of events and the granite being installed when it was suppose to be. I did a lot of research before I heard of this company and I am so happy I found them. The price was the best and the workmanship outstanding. I highly recommend you give them a shout! 5 stars all the way!",
		title: "What I loved the most is how organized this process was.",
	},
];

const TestimonialCarousel = () => {
	const testimonialsPerSlide = 2;

	// Split testimonials into chunks of two for each slide
	const testimonialChunks = [];
	for (let i = 0; i < testimonials.length; i += testimonialsPerSlide) {
		testimonialChunks.push(testimonials.slice(i, i + testimonialsPerSlide));
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
