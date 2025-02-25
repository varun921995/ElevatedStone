import Carousel from "react-bootstrap/Carousel";
import ui2 from "/img/UniqueInstalls/ui2.jpg";
import ui3 from "/img/UniqueInstalls/ui3.jpg";
import k3 from "/img/KitchenAndBath/3.jpg";
import b3 from "/img/KitchenAndBath/b3.jpg";
const ESCarousel = () => {
	return (
		<>
			<Carousel data-bs-theme="light" style={{ background: "black" }}>
				<Carousel.Item>
					<img
						className="d-block es-carousel-image"
						src={ui2}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block es-carousel-image"
						src={ui3}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block es-carousel-image"
						src={k3}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block es-carousel-image"
						src={b3}
						alt="Second slide"
					/>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default ESCarousel;
