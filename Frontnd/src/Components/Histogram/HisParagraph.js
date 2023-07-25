import React, { Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const HisParagraph = () => (
  <>
    <p
      style={{
        marginLeft: '110px',
        marginTop: '100px',
        marginRight: '80px',
        fontSize: '14px',
      }}
      className="p-2 mt-5"
      align="justify"
    >
      <br />
      <br />
      <br />
      The histogram shows you how likely your portfolio is to have either positive or negative extreme returns. Look at the tails of the distribution on both sides: are the negative returns taking more extreme values than the positive ones? In this case, it is not a good sign. By looking at the body of the histogram, you can see whether moderate returns also appear more often on the negative side.
      <br />
      <br />
      <p style={{ fontSize: '12px' }} align="justify">
        The graph shows information about the returns of the whole portfolio, rather than single stocks like in the previous graphs. The zero corresponds to the mean of the returns. The vertical axis represents the frequency or counts of the daily returns in the horizontal axis.
      </p>
    </p>
  </>
);

export default HisParagraph;
