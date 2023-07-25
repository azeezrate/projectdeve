/* eslint-disable react/require-default-props */

import React, { Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Paragraph2 = () => (
  <>
    <p style={{ fontSize: '14px' }} align="justify">
      These graphs represent the bias between risk and return. Usually, a higher return corresponds to a higher risk, and a low return to a low risk. So, you should see your stocks positioned on an imaginary diagonal line starting from 0. According to the risk you want for your portfolio, you can choose to remove stocks that don’t match it or buy more of stocks that do match it. However, bear in mind that risk is not fixed and varies over time. So, remember to refresh your dashboard regularly.
      <br />
      <br />
      <p style={{ fontSize: '12px' }} align="justify">
        Risk is measured with standard deviation, and takes into account the difference between returns and the mean of returns. So, the more far off returns are from the mean, the higher will be the standard deviation. An asset with high standard deviation is also called ‘volatile’.
        <br />
        <br />
      </p>
    </p>
  </>
);

export default Paragraph2;
