import React, { memo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DatesCount = memo(({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        لديك {person.length} مواعيد
      </Col>
    </Row>
  );
});

export default DatesCount;