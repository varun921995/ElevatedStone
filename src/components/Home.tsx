import { Container, Image } from "react-bootstrap";
import b3 from "/img/KitchenAndBath/b3.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
	return (
		<>
			<Container fluid className="home-page-img-container">
				<div className="home-page-zoom-img">
					<Image src={b3} className="es-carousel-image" />
					<div className="bottom-left">
						<h1>
							Kitchen & Bath <MdOutlineKeyboardArrowRight />
						</h1>
					</div>
				</div>
			</Container>
			<Container className="my-4">
				<span className="text">
					We will happily pair you with our closest partnered store. “Our team
					will happily quote your project for you through a partnered store, and
					give you a total cost landed for your project, including installation,
					templating and shipping
				</span>
			</Container>
			{/* 
			<Container className="my-4">
			
				<Row className="g-4">
					{CardData.map((card) => (
						<Col key={card.id} xs={12} sm={6} md={4} lg={3}>
						
							<ImageCard card={card}></ImageCard>
						</Col>
					))}
				</Row>
			</Container> */}
		</>
	);
};

export default Home;
