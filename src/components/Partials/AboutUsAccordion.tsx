import Accordion from "react-bootstrap/Accordion";
import { Col, Image } from "react-bootstrap";
import TeamData from "../../data/TeamData";
const AboutUsAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      {TeamData.map((t) => (
        <Accordion.Item eventKey={t.id} key={t.id}>
          <Accordion.Header>
            <Col xs={6} sm={6} md={3} lg={2}>
              {t.id === "4" && (
                <Image src={t.image} height={255} width={150}></Image>
              )}
              {t.id != "4" && (
                <Image src={t.image} height={175} width={150}></Image>
              )}
            </Col>
            <Col style={{ paddingLeft: "2.5%" }}>
              <h4>{t.title}</h4>
              <span>{t.text}</span>
            </Col>
          </Accordion.Header>
          <Accordion.Body className="text dark-text page-footer-wrapper">
            {t.description.map((p) => (
              <p>{p}</p>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AboutUsAccordion;
