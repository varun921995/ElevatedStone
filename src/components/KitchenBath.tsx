import { Col, Container, Row } from "react-bootstrap";
import ModalImage from "react-modal-image";
import k1 from "/img/KitchenAndBath/1.jpg";
import k2 from "/img/KitchenAndBath/2.jpg";
import k3 from "/img/KitchenAndBath/3.jpg";
import k4 from "/img/KitchenAndBath/4.jpg";
import b1 from "/img/KitchenAndBath/b1.jpg";
import b2 from "/img/KitchenAndBath/b2.jpg";
import b3 from "/img/KitchenAndBath/b3.jpg";
import b4 from "/img/KitchenAndBath/b4.jpg";
const KitchenBath = () => {
	return (
		<>
			<Container className="my-4">
				<div className="pageHeading">
					<h1>Kitchen & Bath</h1>
				</div>
			</Container>
			<Container>
				<Row>
					<Col>
						<p className="our-services-text">
							Our Primary service is to supply and service Kitchen and Bathroom
							construction or renovation projects. Quartz and Porcelain products
							have been the most popular choices for Kitchen and Bath design for
							years, and adding our expertise in fabrication and installation,
							allows Atlantic Canadian clients world class access to the best
							end quality stone in the market. We work hand in hand with
							Designers and Architects to ensure that we can elevate their
							client’s home design needs! For more information and examples of
							our work, please check out our Instagram page!
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} lg={3} className="p-3">
						<div className="zoom-img">
							<ModalImage
								small={k1}
								large={k1}
								alt="Kitchen 1"
								className="kitchen-bath-imag "
							/>
						</div>
					</Col>
					<Col xs={12} sm={12} md={6} lg={3} className="p-3">
						<div className="zoom-img">
							<ModalImage
								small={k3}
								large={k3}
								alt="Kitchen 2"
								className="kitchen-bath-imag "
							/>
						</div>
					</Col>
					<Col xs={12} sm={12} md={6} lg={3} className="p-3">
						<div className="zoom-img">
							<ModalImage
								small={k2}
								large={k2}
								alt="Kitchen 3"
								className="kitchen-bath-imag "
							/>
						</div>
					</Col>
					<Col xs={12} sm={12} md={6} lg={3} className="p-3">
						<div className="zoom-img">
							<ModalImage
								small={k4}
								large={k4}
								alt="Kitchen 4"
								className="kitchen-bath-imag "
							/>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} lg={3} className="p-3">
						<div className="zoom-img">
							<ModalImage
								small={b1}
								large={b1}
								alt="Bath 1"
								className="kitchen-bath-imag "
							/>
						</div>
					</Col>
					<Col xs={12} sm={12} md={6} lg={3} className="p-3">
						<div className="zoom-img">
							<ModalImage
								small={b2}
								large={b2}
								alt="Bath 2"
								className="kitchen-bath-imag "
							/>
						</div>
					</Col>
					<Col xs={12} sm={12} md={6} lg={3} className="p-3">
						<div className="zoom-img">
							<ModalImage
								small={b3}
								large={b3}
								alt="Bath 3"
								className="kitchen-bath-imag "
							/>
						</div>
					</Col>
					<Col xs={12} sm={12} md={6} lg={3} className="p-3">
						<div className="zoom-img">
							<ModalImage
								small={b4}
								large={b4}
								alt="Bath 4"
								className="kitchen-bath-imag "
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default KitchenBath;
