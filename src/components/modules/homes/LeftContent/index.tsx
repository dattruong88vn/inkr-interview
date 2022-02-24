import { Row, Col } from "antd";

import { Section, MainPoster } from "components";

const LeftContent = () => {
  return (
    <Col xs={15} xl={16}>
      <Row>
        <Section>
          <MainPoster />
        </Section>
      </Row>
      <Row>
        <Section title="Pricing & Promotion">dat</Section>
      </Row>
      <Row>
        <Section title="Last read">dat</Section>
      </Row>
    </Col>
  );
};

export default LeftContent;
