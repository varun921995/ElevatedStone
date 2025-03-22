import { Col, Container, Row } from "react-bootstrap";
import ModalImage from "react-modal-image";
import ui1 from "/img/UniqueInstalls/ui1.jpg";
import ui2 from "/img/UniqueInstalls/ui2.jpg";
import ui3 from "/img/UniqueInstalls/ui3.jpg";
import ContactUsFooter from "./Partials/ContactUsFooter";
import Partners from "./Partials/Partners";
const UniqueInstall = () => {
  return (
    <>
      <div className="page-heading-wrapper">
        <Container>
          <div className="pageHeading text-center">UNIQUE INSTALL</div>
        </Container>
      </div>
      <div className="background-wrapper">
        <Container>
          <Row>
            <Col>
              <p className="text">
                While we primarily focus on Kitchen and Bathroom projects, our
                service offerings range far past them! From fully Mitred kitchen
                sinks, elevated outdoor dining areas and even floor to ceiling
                quartz or porcelain fireplaces, we at Elevated Stone Design can
                help make any of your stone project dreams come true.
              </p>
              <p className="text">
                Should you have any non-traditional work that falls outside of
                our scope, we will be just as happy to help your clients find
                the appropriate contacts in the industry to suit the project
                needs.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mb-5">
        <Row>
          <Col xs={12} sm={12} md={6} lg={3} className="p-3">
            <div className="zoom-img">
              <ModalImage
                small={ui1}
                large={ui1}
                alt="Unique Install 1"
                className="kitchen-bath-imag "
                hideDownload={true}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} className="p-3">
            <div className="zoom-img">
              <ModalImage
                small={ui2}
                large={ui2}
                alt="Unique Install 2"
                className="kitchen-bath-imag "
                hideDownload={true}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} className="p-3">
            <div className="zoom-img">
              <ModalImage
                small={ui3}
                large={ui3}
                alt="Unique Install 3"
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

export default UniqueInstall;
