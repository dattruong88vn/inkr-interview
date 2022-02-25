import { Row, Col } from "antd";

import { Section, MainPoster, LastRead } from "src/components";

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
        <Section title="Last read">
          <LastRead />
        </Section>
      </Row>
    </Col>
  );
};

export default LeftContent;
