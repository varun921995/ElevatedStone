import Accordion from "react-bootstrap/Accordion";
import { Col, Image } from "react-bootstrap";
import ryan from "/img/team/Ryan.jpeg";
import sam from "/img/team/Sam.jpeg";
const AboutUsAccordion = () => {
	return (
		<Accordion defaultActiveKey="0">
			<Accordion.Item eventKey="1">
				<Accordion.Header>
					<Col xs={6} sm={6} md={3} lg={2}>
						<Image src={ryan} height={150} width={150}></Image>
					</Col>
					<Col>
						<h4>Ryan Aube Cormier</h4>
						<span>Chief Executive Officer and Founder</span>
					</Col>
				</Accordion.Header>
				<Accordion.Body className="text dark-text page-footer-wrapper">
					<p>
						With over 18 years of experience in the stone industry, Ryan Aube
						Cormier is a dedicated professional with a deep-rooted passion for
						the craft. From shop work and templating to installation, Ryan has
						developed a diverse skill set that spans all aspects of stonework.
						His journey began with a strong foundation in the field, and after
						working for over a decade as an employee, followed by another 8
						years as a subcontractor, Ryan saw an opportunity to raise industry
						standards. This led him to establish Elevated Stone Design, a
						company focused on delivering superior, high-quality stone
						countertops and installations.
					</p>
					<p>
						Ryan is driven by a commitment to perfection and is always striving
						to improve. His true passion lies in installation, where he
						continually pushes the limits of what's possible with stone,
						ensuring every job exceeds expectations. A natural-born salesperson,
						he thrives on tackling challenges and building long-lasting
						relationships within the industry. He is particularly skilled in
						templating, fabrication, and overseeing complex installations,
						making him an expert at transforming visions into reality.
					</p>
					<p>
						One of his proudest accomplishments is training his crew to become
						top-tier technicians, ensuring that every team member shares his
						passion for excellence. Ryan is also deeply interested in the
						history of stone countertops, which has been a motivating factor
						throughout his career. His desire to elevate the industry and offer
						a better finished product is what fuels him daily.
					</p>
					<p>
						Ryan hails from Stansted, Quebec, and after years of honing his
						craft, he's now bringing his expertise to Nova Scotia. Alongside his
						beautiful wife and partner, Caitlin, Ryan is excited to continue
						growing Elevated Stone Design and sharing his vision of quality
						craftsmanship with every client.
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
				<Accordion.Header>
					<Col xs={6} sm={6} md={3} lg={2}>
						<Image src={sam} height={150} width={150}></Image>
					</Col>
					<Col>
						<h4>Director of Operations</h4>
						<span>Sam Quackenbush</span>
					</Col>
				</Accordion.Header>
				<Accordion.Body className="text dark-text page-footer-wrapper">
					<p>
						Sam honed his management and business development skills during his
						studies in Dalhousie University's Masters of Business Administration
						program. Along with short term Project Management and Project
						Finance Analyst roles with IBM and Canada's Ocean Supercluster, Sam
						brings 3+ years of Public Sector experience, where he worked hand in
						hand with Nova Scotian small businesses to ensure that they are able
						to secure sufficient grants and funding. Sam’s focus on internal
						company growth strategy and change management practices have allowed
						Elevated Stone Design to scale at an appropriate pace, ensuring that
						company standard of quality craftsmanship and premium customer
						service are the always at the forefront of operations.
					</p>
					<p>
						When Sam is not working he can most likely be found on a golf
						course, coaching youth sports, or spending time with his friends and
						family in the Halifax area.
					</p>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default AboutUsAccordion;
