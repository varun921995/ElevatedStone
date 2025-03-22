import cambria from "/img/ProductPartners/cambria-logo.png";
import silestone from "/img/ProductPartners/silestone-logo.png";
import caesarstone from "/img/ProductPartners/caesarstone-logo.png";
import dektone from "/img/ProductPartners/dekton-logo.png";
import hanstone from "/img/ProductPartners/hanstone.png";
import florim from "/img/ProductPartners/florim.png";
import { Container, Row, Col, Image } from "react-bootstrap";

const Partners = () => {
  return (
    <>
      <div style={{ background: "#ddd9d1" }}>
        <Container>
          <Row>
            <Col>
              <Image
                src={cambria}
                className=""
                height={"150px"}
                width={"150px"}
              ></Image>
            </Col>
            <Col>
              <Image
                src={silestone}
                className=""
                height={"150px"}
                width={"150px"}
              ></Image>
            </Col>
            <Col>
              <Image
                src={caesarstone}
                className=""
                height={"150px"}
                width={"150px"}
              ></Image>
            </Col>
            <Col>
              <Image
                src={dektone}
                className=""
                height={"150px"}
                width={"150px"}
              ></Image>
            </Col>
            <Col>
              <Image
                src={hanstone}
                className=""
                height={"150px"}
                width={"150px"}
              ></Image>
            </Col>
            <Col>
              <Image
                src={florim}
                className=""
                height={"150px"}
                width={"150px"}
              ></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Partners;
