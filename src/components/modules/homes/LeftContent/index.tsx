import { Row, Col } from "antd";

import { Section } from "components";

const LeftContent = () => {
  return (
    <Col xs={15} xl={16}>
      <Row>
        <Section>
          <div>dat</div>
        </Section>
      </Row>
      <Row>
        <Section title="Last read">dat</Section>
      </Row>
    </Col>
  );
};

export default LeftContent;
