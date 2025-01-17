import { Col, Container, Image, Row } from "react-bootstrap";
import image1 from "../assets/img/Our Services/image1.jpg";
import image3 from "../assets/img/Our Services/image3.jpg";
import image4 from "../assets/img/Our Services/image4.jpg";

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
			<Container className="my-4">
				<Row>
					<Col>
						<span className="our-services-subHeading">Templating</span>
						<br />
						<p className="our-services-text">
							Once a Quote is confirmed and the deposit is paid, our
							administration team will schedule a full scale template of your
							project. Our CEO Ryan is our active templator, using the LT 55
							2d3D laser measurement system, he is able to ensure that the
							fabrication team has industry leading accurate measurements. Ryan
							is so skilled in this skill that he is one of few templators in
							Canada who can template a quartz backsplash during his initial
							template, saving the client the cost and time of a 2nd templating
							visit.
						</p>
					</Col>
					<Col xs={12} sm={12} md={6}>
						<Image src={image3} className="our-services-image"></Image>
					</Col>
				</Row>
			</Container>
			<Container className="my-5">
				<hr></hr>
			</Container>
			<Container className="my-4">
				<Row>
					<Col xs={12} sm={12} md={6}>
						<Image src={image4} className="our-services-image"></Image>
					</Col>
					<Col>
						<span className="our-services-subHeading">Fabrication</span>
						<p className="our-services-text">
							Our Fabrication is second to none in Eastern Canada. As we
							continue to work towards the build of our own Fabrication shop
							here in Dartmouth, Nova Scotia, we are still able to service the
							entire maritimes due to a strategic partnership with Rouleau
							Granit. Rouleau Granit has been Eastern Canada’s foremost leader
							in premium stone fabrication and are able to handle both
							commercial and residential projects of any scope without the usual
							risk of wavering quality.
						</p>
					</Col>
				</Row>
			</Container>
			<Container className="my-5">
				<hr></hr>
			</Container>
			<Container className="my-4">
				<Row>
					<Col>
						<span className="our-services-subHeading">Installations</span>
						<br />
						<p className="our-services-text">
							Elevated Stone Design only employs the top installation crews in
							Atlantic Canada. We primarily service customers through our
							partnered Subcontracting company Stone Hammer Homes, of which Ryan
							personally trained and developed the installation teams before the
							launch of Elevated Stone Design. Our Installers pride themselves
							on their excellent customer service and professionalism on the job
							site, while also being specialists in seam work and polish to
							ensure that your client’s countertops are installed correctly at
							every job.
						</p>
					</Col>
					<Col xs={12} sm={12} md={6}>
						<Image src={image1} className="our-services-image"></Image>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default OurServices;
