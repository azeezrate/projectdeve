import React, { Fragment, useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import Plot from 'react-plotly.js';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { selectStocks2 } from '../../redux/ConfigureStore';
import { addMarket } from '../../redux/MarketC';

const config = {
  type: 'bar',
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  },
};
const StackedChart = () => {
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
  const [PercentARlistt, setPercentARlistt] = useState(null);
  const [SP500listt, setSP500listt] = useState(null);
  const [W5000listt, setW5000listt] = useState(null);
  useEffect(() => {
    const id = user?.sub.split('|')[1];
    console.log('ID====>', id);
    // axios.get(`http://localhost:8000/datalist1/${id}`)
    axios.get(`http://www.mayportfolio.com/datalist1/${id}`)
      .then((response) => {
        console.log('First Api Response', response.data);
        setstocknames(response.data.stockNames);
        setPercentARlistt(response.data.PercentageAR);
        setSP500listt(response.data.SP500listt);
        setW5000listt(response.data.W5000listt);
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
  // };
  // const trace1 = {
  //   x: ['AMZN', 'TSLA', 'PYPL', 'BABA'],
  //   y: [-41.94451827, -42.15744544, -66.93241028, -46.00072058],
  //   name: 'PercentAR',
  //   type: 'bar',
  // };
  // const trace2 = {
  //   x: ['AMZN', 'TSLA', 'PYPL', 'BABA'],
  //   y: [-12.67787156, -10.37538798, -13.32253041, -8.25908878],
  //   name: 'SP500',
  //   type: 'bar',
  // };
  // const trace3 = {
  //   x: ['AMZN', 'TSLA', 'PYPL', 'BABA'],
  //   y: [-14.01023064, -11.35558404, -17.11559793, -12.46281232],
  //   name: 'W5000',
  //   type: 'bar',
  // };
  const trace1 = {
    x: Stocknames,
    y: PercentARlistt,
    name: 'Stock',
    type: 'bar',
    marker: {
      color: '#FFFDD0',
    },
  };
  const trace2 = {
    x: Stocknames,
    y: SP500listt,
    name: 'SP500',
    type: 'bar',
    marker: {
      color: '#ECFFDC',
    },
  };
  const trace3 = {
    x: Stocknames,
    y: W5000listt,
    name: 'W5000',
    type: 'bar',
    marker: {
      color: '#2E8B57',
    },
  };

  const data = [trace1, trace2, trace3];

  const layout = {
    width: 600,
    height: 540,
    barmode: 'group',
    title: 'How did your stocks perform compared to the market?',
    yaxis: { title: 'Returns' },
  };

  return (
    <Container>
      <Row>
        <Col>
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
export default StackedChart;
