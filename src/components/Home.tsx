import { Container, Image } from "react-bootstrap";
import fabrication1 from "/img/OurServices/image4.jpg";
import { useState, useLayoutEffect } from "react";
import TestimonialCarousel from "./Partials/TestimonialCarousel";
const Home = () => {
	const [isReady, setIsReady] = useState(false);
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
		setIsReady(true); // Ensures the page starts at the top
	}, []);

	if (!isReady) return null;
	return (
		<>
			<Container fluid className="home-page-img-container my-3">
				<div className="home-page-zoom-img">
					<Image src={fabrication1} className="es-carousel-image" />
					
				</div>
			</Container>
			<Container className="my-4">
				<span className="text">
					We will happily pair you with our closest partnered store. Our team
					will happily quote your project for you through a partnered store, and
					give you a total cost landed for your project, including installation,
					templating and shipping.
				</span>
			</Container>
			<Container className="my-4">
				<div className="pageHeading">
					<h1>Testimonials</h1>
				</div>
			</Container>
			<Container>
				<TestimonialCarousel></TestimonialCarousel>
			</Container>
		</>
	);
};

export default Home;
