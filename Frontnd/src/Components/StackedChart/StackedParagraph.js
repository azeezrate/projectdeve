import React, { Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const StackedParagraph = () => (
  <>
    <Col className="col-10">
      <p style={{ marginLeft: '110px', marginTop: '100px', fontSize: '14px' }} align="justify">
        In this graph, you can compare the performance of your stocks to that of the market in the same time frame. That is, the market shows returns starting from the date of purchase of your stock. Typically, your stocks should follow the market trend. If they do not, it is a good reason to investigate it. It could be an opportunity to make more money or to prevent yourself from losing money.
        <br />
        <br />
        <p style={{ fontSize: '12px' }} align="justify">
          The indexes used for the US market are Wilshire 5000 and S&P 500. Indexes show the average returns of all the stocks represented.
        </p>
      </p>
    </Col>
  </>
);

export default StackedParagraph;
