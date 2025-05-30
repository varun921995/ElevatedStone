import { Col, Container, Row } from "react-bootstrap";
import ModalImage from "react-modal-image";
import k1 from "/img/KitchenAndBath/1.jpg";
import k2 from "/img/KitchenAndBath/2.jpg";
import k3 from "/img/KitchenAndBath/3.jpg";
import k4 from "/img/KitchenAndBath/4.jpg";
import b1 from "/img/KitchenAndBath/b1.jpeg";
import b2 from "/img/KitchenAndBath/b2.jpg";
import b3 from "/img/KitchenAndBath/b3.jpg";
import b4 from "/img/KitchenAndBath/b4.jpg";
import { useLayoutEffect, useState } from "react";
import ContactUsFooter from "./Partials/ContactUsFooter";
import Partners from "./Partials/Partners";
const KitchenBath = () => {
  const [isReady, setIsReady] = useState(false);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setIsReady(true); // Ensures the page starts at the top
  }, []);

  if (!isReady) return null;
  return (
    <>
      <div className="page-heading-wrapper">
        <Container>
          <div className="pageHeading text-center">KITCHEN & BATH</div>
        </Container>
      </div>
      <div className="background-wrapper">
        <Container>
          <Row>
            <Col>
              <p className="text">
                Our Primary service is to supply and service Kitchen and
                Bathroom construction or renovation projects. Quartz and
                Porcelain products have been the most popular choices for
                Kitchen and Bath design for years, and adding our expertise in
                fabrication and installation, allows Atlantic Canadian clients
                world class access to the best end quality stone in the market.
                We work hand in hand with Designers and Architects to ensure
                that we can elevate their client’s home design needs! For more
                information and examples of our work, please check out our
                Instagram page!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mb-5 ">
        <Row>
          <Col xs={12} sm={12} md={6} lg={3} className="p-3">
            <div className="zoom-img">
              <ModalImage
                small={k1}
                large={k1}
                alt="Kitchen 1"
                className="kitchen-bath-imag"
                hideDownload={true}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} className="p-3">
            <div className="zoom-img">
              <ModalImage
                small={k3}
                large={k3}
                alt="Kitchen 2"
                className="kitchen-bath-imag"
                hideDownload={true}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} className="p-3">
            <div className="zoom-img">
              <ModalImage
                small={k2}
                large={k2}
                alt="Kitchen 3"
                className="kitchen-bath-imag"
                hideDownload={true}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} className="p-3">
            <div className="zoom-img">
              <ModalImage
                small={k4}
                large={k4}
                alt="Kitchen 4"
                className="kitchen-bath-imag"
                hideDownload={true}
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
                hideDownload={true}
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
                hideDownload={true}
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
                hideDownload={true}
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
                hideDownload={true}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <ContactUsFooter></ContactUsFooter>
      <Partners></Partners>
    </>
  );
};
export default KitchenBath;
