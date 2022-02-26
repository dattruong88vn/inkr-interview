import { Row, Col } from "antd";

import { Section, GetApp, RelatedTitles } from "src/components";

const RightContent = () => {
  return (
    <Col xs={9} xl={8}>
      <Row>
        <Section title="About This">dat</Section>
      </Row>
      <Row>
        <Section title="Related Titles">
          <RelatedTitles />
        </Section>
      </Row>
      <Row>
        <Section title="12 Comments">dat</Section>
      </Row>
      <Row>
        <Section>
          <GetApp />
        </Section>
      </Row>
    </Col>
  );
};

export default RightContent;
