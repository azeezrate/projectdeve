import React, { Fragment, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Plot from 'react-plotly.js';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
// import { data1 } from '../Piechart/Piechart';

const HBarchart = () => {
  const { user, isAuthenticated } = useAuth0();
  const [dataArray, setDataArray] = useState([]);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log('dataArray', dataArray);
  // }, [dataArray]);
  const [sendData, setSendData] = useState({});
  const [seriess, setSeriess] = useState([]);
  const [Stocknames, setstocknames] = useState(null);
  const [PercentageAR, setPercentageAR] = useState(null);
  const [TotalInvestment, setTotalInvestment] = useState(null);
  const [TotalReturn, setTotalReturn] = useState(null);
  useEffect(() => {
    const id = user?.sub.split('|')[1];
    console.log('ID====>', id);
    axios.get(`http://127.0.0.1:8000/datalist1/${id}`)
    // axios.get(`http://www.mayportfolio.com/datalist1/${id}`)
      .then((response) => {
        console.log('First Api Response', response.data);
        setstocknames(response.data.stockNames);
        setPercentageAR(response.data.PercentageAR);
        setTotalInvestment(response.data.TotalInvestment);
        setTotalReturn(response.data.TotalReturn);
        // Stockn = response.data.stockNames;
        // response.data.forEach((stock) => dispatch(addStock(stock)));
      }, (error) => {
        console.log('Error', error);
      });
  }, []);
  // useEffect(() => {
  //   if (stocks.length > 0) {
  //     setSendData({});
  //     Object.entries(stocks[0].response_data).map(([key, val]) => {
  //       setSendData((e) => {
  //         console.log('stock1 Data', e);
  //         try {
  //           if (!e[key].includes(val)) {
  //             e[key].push(val.toFixed(2));
  //           }
  //         } catch {
  //           e[key] = [val];
  //         }
  //         return e;
  //       });
  //       return val;
  //     });
  //   }
  // }, [stocks]);
  console.log('Stock1 data is:', Stocknames);
  // useEffect(() => {
  //   Object.entries(sendData)?.map(([k, v]) => {
  //     Object.entries(v)?.map(([sk, sv]) => {
  //       Object.entries(sv)?.map(([shk, shv]) => {
  //         console.log('shv====>', shv);
  //         setDataArray((e) => {
  //           console.log('');
  //           return [...e, shv];
  //         });
  //         return shv;
  //       });
  //       console.log('sv====>', sv);
  //       return sv;
  //     });
  //     console.log('v====>', v);
  //     return v;
  //   });
  // }, [sendData]);
  // const data = {
  //   labels: Object.entries(sendData)?.map(([k, v]) => k),
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: dataArray,
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const options = {
  //   plugins: {
  //     legend: { display: false },
  //   },
  //   indexAxis: 'y',
  //   maintainAspectRatio: false,
  //   responsive: false,
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };
  // console.log('Data from Piechart:', data1);
  const data = [{
    type: 'bar',
    x: PercentageAR,
    y: Stocknames,
    // x: [-41.94451826842324, -42.15744544466632, -66.93241028179358, -46.00072057934726],
    // y: ['AMZN', 'TSLA', 'PYPL', 'BABA'],
    orientation: 'h',
    marker: { color: ['#023020', '#088F8F', '#ECFFDC', '#2E8B57'] },
  }];
  const layout = {
    width: 500,
    height: 430,
    xaxis: {
      tickangle: -45,
      title: 'Percentage returns',
    },
    title: 'Unrealised returns per stock',
    // yaxis: {
    //   side: 'left',
    // },
    yaxis: {
      zeroline: false,
      gridwidth: 3,
      side: 'left',
    },
    // bargap: 0.05,
  };
  return (
    <Container>
      <Row>
        <Col className="mb-2">
          <Plot
            data={data}
            layout={layout}
            // layout={{ width: 500, height: 500 }}
            className="mx-auto px-1"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center mb-2">Total amount invested</p>
          <p className="text-center font-weight-bold">
            $
            {TotalInvestment}
          </p>
        </Col>
        <Col>
          <p className="text-center mb-2">Total unrealised return</p>
          <p className="text-center font-weight-bold">
            $
            {TotalReturn}
          </p>
        </Col>
      </Row>
    </Container>
    // <Plot
    //   data={data}
    //   // layout={layout}
    //   layout={{ width: 500, height: 500, title: 'How you have split your investment across companies' }}
    // />
  );
  // return (
  //   <Container>
  //     <Row>
  //       <Col>
  //         <p className="mt-5 p-3 font-weight-bold">
  //           <h5>Percentage return if you sold your stocks today</h5>
  //         </p>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col className="mb-5">
  //         <Bar
  //           type="bar"
  //           data={data}
  //           options={options}
  //           height={188}
  //           width={375}
  //           className="mx-auto px-1"
  //         />
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //         <p className="text-center mb-2">Total amount invested</p>
  //         <p className="text-center font-weight-bold">$6638.35</p>
  //       </Col>
  //       <Col>
  //         <p className="text-center mb-2">Total return</p>
  //         <p className="text-center font-weight-bold">$168.2</p>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
};

export default HBarchart;
