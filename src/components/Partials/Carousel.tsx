import Carousel from "react-bootstrap/Carousel";
import ui2 from "/img/UniqueInstalls/ui2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

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
					<Carousel.Caption
						style={{ top: "0%", transform: "translateX(-30%)" }}>
						<div>
							<Nav.Link as={NavLink} to="/kitchenBath">
								<h1>
									KITCHEN & BATH <MdOutlineKeyboardArrowRight />
								</h1>
							</Nav.Link>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				{/* <Carousel.Item>
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
				</Carousel.Item> */}
			</Carousel>
		</>
	);
};

export default ESCarousel;
