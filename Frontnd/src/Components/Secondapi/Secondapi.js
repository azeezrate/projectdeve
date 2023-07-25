import React, { Fragment, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Scatter } from 'react-chartjs-2';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectStocks2 } from '../../redux/ConfigureStore';

function Secondapi() {
  useEffect(() => {
    console.log('useEffect ');
    // axios.post('http://localhost:8000/datalist2/',
    axios.post('http://www.mayportfolio.com/datalist2/',
      {
        stockNames: ['ABC', 'INMD', 'RDSB', 'BA'],
        interval: 'd',
        quantitiesPurchased: 15,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>Second api</h1>
    </>
  );
}

export default Secondapi;
