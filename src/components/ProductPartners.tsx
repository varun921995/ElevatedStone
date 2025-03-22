import { Col, Container, Row } from "react-bootstrap";
import ContactUsFooter from "./Partials/ContactUsFooter";

import Partners from "./Partials/Partners";
const ProductPartners = () => {
  return (
    <>
      <div className="page-heading-wrapper">
        <Container>
          <div className="pageHeading text-center">PRODUCT PARTNERS</div>
        </Container>
      </div>
      <div className="background-wrapper">
        <Container>
          <Row>
            <Col>
              <p className="text">
                We pride ourselves in working with the top brands in the premium
                quartz space. All of our partnered products come with a
                warranty, and have all established themselves as the premium
                offerings within the industry.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Partners></Partners>
      <ContactUsFooter></ContactUsFooter>
    </>
  );
};

export default ProductPartners;
