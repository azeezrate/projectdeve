/* eslint-disable react/require-default-props */

import React, { Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Paragraph3 = () => (
  <>
    <p style={{ fontSize: '14px' }} align="justify">
      What you see above is a correlation matrix, where stocks are compared in pairs. The darker the square connecting two stocks, the higher the level of positive correlation between them; the lighter, the higher will be the negative correlation. So, values close to 1 or -1 mean that the stock returns move in the same direction or in the opposite direction, respectively, and their magnitude will also be similar.
      <br />
      <br />
      <p style={{ fontSize: '12px' }} align="justify">
        Correlation can range from -1 to 1. It indicates how similar the direction and the magnitude of the returns of two stocks are.
        <br />
        <br />
        <br />
        <br />
      </p>
    </p>
  </>
);

export default Paragraph3;
