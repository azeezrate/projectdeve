/* eslint-disable react/require-default-props */

import React, { Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ContentCard = (
  {
    child0, child1, child2, child3,
  },
) => (
  <>
    <Container>
      <Row className="bg-white">
        <Col md={child1 ? 6 : 12} xs={12}>
          {child0}
        </Col>
        <Col md={child0 ? 6 : 12} xs={12}>
          {child1}
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={12}>
          {child2}
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          {child3}
        </Col>
      </Row>
    </Container>
  </>
);

ContentCard.propTypes = {
  child0: PropTypes.element,
  child1: PropTypes.element,
  child2: PropTypes.element,
  child3: PropTypes.element,
};

export default ContentCard;
