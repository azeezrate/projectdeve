import React, { Fragment, useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import Plot from 'react-plotly.js';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { selectStocks2 } from '../../redux/ConfigureStore';
import { addMarket } from '../../redux/MarketC';

const Heatmap = () => {
  const { user, isAuthenticated } = useAuth0();
  const [dataArray, setDataArray] = useState([]);
  const dispatch = useDispatch();
  const { market } = useSelector((state) => state.third);
  // useEffect(() => {
  //   console.log('dataArray', dataArray);
  // }, [dataArray]);
  const [sendData, setSendData] = useState([]);
  const [seriess, setSeriess] = useState([]);
  const [Stocknames, setstocknames] = useState(null);
  const [corrlist, setcorrlist] = useState(null);
  useEffect(() => {
    const id = user?.sub.split('|')[1];
    console.log('ID====>', id);
    axios.get(`http://127.0.0.1:8000/datalist1/${id}`)
    // axios.get(`http://www.mayportfolio.com/datalist1/${id}`)
      .then((response) => {
        console.log('First Api Response', response.data);
        setstocknames(response.data.stockNames);
        setcorrlist(response.data.corrlist);
        // Stockn = response.data.stockNames;
        // response.data.forEach((stock) => dispatch(addStock(stock)));
      }, (error) => {
        console.log('Error', error);
      });
  }, []);
  // useEffect(() => {
  //   axios.get('http://localhost:8000/marketcomparison').then(
  //     (response) => {
  //       response.data.forEach((m) => dispatch(addMarket(m)));
  //       setSendData([]);
  //       response?.data?.map((value) => {
  //         const final = {};
  //         Object.entries(value)?.map(([key, val]) => {
  //           if (!key.includes('GSPC Volume') || !val === 0) {
  //             final[key] = val;
  //           }
  //           return val;
  //         });
  //         setSendData((e) => [...e, {
  //           label: 'Popularity of colours',
  //           data: final,
  //           backgroundColor: [
  //             'green',
  //           ],
  //           borderWidth: 1,
  //           width: '100%',
  //           height: '100%',
  //         }]);
  //         return value;
  //       });
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //   );
  // }, []);
  // const data = {
  //   labels: [],
  //   datasets: sendData,
  // }
  // const data = [
  //   {
  //     z: [[1.000000, 0.304881, 0.600527, 0.549449], [0.304881, 1.000000, 0.409183, 0.407243], [0.600527, 0.409183, 1.000000, 0.519871], [0.549449, 0.407243, 0.519871, 1.000000]],
  //     x: ['AMZN', 'TSLA', 'PYPL', 'BABA'],
  //     y: ['AMZN', 'TSLA', 'PYPL', 'BABA'],
  //     type: 'heatmap',
  //     hoverongaps: false,
  //     colorscale: 'blugrn',
  //   },
  // ];
  const colorscaleValue = [
    [0, '#3D9970'],
    [1, '#001f3f'],
  ];
  const data = [
    {
      z: corrlist,
      x: Stocknames,
      y: Stocknames,
      type: 'heatmap',
      hoverongaps: false,
      colorscale: colorscaleValue,
    },
  ];
  const layout = { width: 950, height: 540 };
  return (
    <Container>
      <Row>
        <Col className="col-md-11">
          <Plot
            data={data}
            layout={layout}
            // data={[
            //   { type: 'bar', x: ['GME', 'AAPL', 'AMC'], y: [2552.53010365, -13.13085188, -64.04049154] },
            //   { type: 'bar', x: ['GME', 'AAPL', 'AMC'], y: [20.2457088, -11.88017611, -13.85107182] },
            //   { type: 'bar', x: ['GME', 'AAPL', 'AMC'], y: [17.28791727, -13.87287414, -15.27580145] },
            // ]}
            // layout={{ width: 400, barmode: 'group', title: 'A Fancy Plot' }}
            className="mx-auto"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Heatmap;
