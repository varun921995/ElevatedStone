import { Col, Container, Row } from "react-bootstrap";
import AboutUsAccordion from "./Partials/AboutUsAccordion";
const AboutUs = () => {
	return (
		<>
			<div className="page-heading-wrapper">
				<Container>
					<div className="pageHeading text-center">ABOUT US</div>
				</Container>
			</div>
			<div className="background-wrapper" style={{ paddingBottom: "0px" }}>
				<Container>
					{/* <span className="subHeading">Company</span> */}
					<p className="text">
						In the heart of Nova Scotia, Elevated Stone Design emerged as a
						beacon of quality and craftsmanship in the world of stone
						fabrication and installation. The company was founded with a vision
						to transform the spaces we live in, bringing the timeless elegance
						of premium stone into homes and commercial spaces alike. The
						inception of Elevated Stone Design was driven by a passion for
						excellence and a keen eye for detail. Our founders recognized a gap
						in the Atlantic Canadian market for high-quality, reliable stone
						fabrication services that could cater to both residential and
						commercial clients. With a commitment to superior craftsmanship,
						they set out to establish a company that would not only meet but
						exceed customer expectations.
					</p>
					<p className="text">
						From the very beginning, Elevated Stone Design focused on
						building a robust operational framework. With a production capacity
						ranging from 650 to 1000 square feet per day, the company quickly
						established itself as a volume leader in the industry. The ability
						to complete 10-15 installations weekly was a testament to the
						efficiency and dedication of the team, which was poised for
						expansion to meet growing demand.{" "}
					</p>

					<p className="text">
						Quality control has always been at the forefront of Elevated Stone
						Design's operations. From the initial slab inspection to the
						final installation, every step is meticulously managed to ensure the
						highest standards are maintained. The company's "white glove"
						treatment approach guarantees that each project is handled with the
						utmost care and precision, earning the trust and loyalty of its
						clients.
					</p>

					<p className="text">
						Elevated Stone Design is not just about craftsmanship; it's
						also about innovation and responsibility. The company employs
						advanced technologies like LT 55 3D/2D software integrated with
						AutoCAD for precise laser templating. Additionally, sustainability
						is woven into the fabric of their operations through efficient waste
						management practices, including the repurposing of slab remnants to
						both reduce wasted stone and offer unmatched discounting on premium
						vanities made from “wasted materials”.
					</p>
				</Container>
			</div>
			<Container className="my-4">
				<Row className="my-2">
					<span className="subHeading">Team</span>
				</Row>
				<Row>
					<Col>
						<AboutUsAccordion></AboutUsAccordion>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AboutUs;
