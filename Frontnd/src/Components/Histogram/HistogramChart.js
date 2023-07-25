import React, { Fragment, useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend,
}
from 'recharts';
import { selectStocks2 } from '../../redux/ConfigureStore';
import { addStock } from '../../redux/StockSlice2';

// const x = [];
// for (let index = 0; index < 500; index++) {
//   x[index] = Math.random();
// }
const HistogramChart = () => {
  const [dailyreturnsportf, setdailyreturnsportf] = useState(null);
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    const id = user?.sub.split('|')[1];
    console.log('ID====>', id);
    axios.get(`http://127.0.0.1:8000/datalist1/${id}`)
    // axios.get(`http://www.mayportfolio.com/datalist1/${id}`)
      .then((response) => {
        console.log('First Api Response', response.data);
        setdailyreturnsportf(response.data.dailyreturnsportf);
        // Stockn = response.data.stockNames;
        // response.data.forEach((stock) => dispatch(addStock(stock)));
      }, (error) => {
        console.log('Error', error);
      });
  }, []);
  const trace = {
    // x: x,
    // x: [1, 2, 3, 7, 13, 24, 20, 32],
    x: dailyreturnsportf,
    // x: [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 0, 9],
    // y: [1, 4, 4, 7, 13, 24, 20, 32, 42, 41, 27, 23, 17, 12, 3, 4, 2, 0, 2],
    // y: [-9, -8, -7, -6, -5, -2, -2],
    // z: [1],
    type: 'histogram',
    marker: {
      color: '#2E8B57',
    },
    // histnorm: 'probability',
  };
  const data = [trace];
  const layout = {
    width: 650,
    height: 550,
    // bargap: 0.05,
    // bargroupgap: 0.2,
    barmode: 'overlay',
    title: 'Does your portfolio usually have <br> more positive or negative returns?',
    xaxis: { title: 'Returns' },
    yaxis: { title: 'Count of returns' },
  };
  return (
    <Container>
      <Row>
        <Col>
          {/* <h6 className="text-center mt-5">Histogram</h6> */}
          <Plot
            data={data}
            layout={layout}
            // layout={{ width: 500, height: 500, title: 'How you have split your investment across companies' }}
            className="mx-auto"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default HistogramChart;
