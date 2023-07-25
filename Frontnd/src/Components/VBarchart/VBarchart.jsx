import React, { Fragment, useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectStocks } from '../../redux/ConfigureStore';

//   interface Props {
//       graphData?: number
//   }

//   export interface ReqObj {
//     stockNames: string[];
//     purchaseDates: string[];
//     quantitiesPurchased: number[];
//   }

//   export interface ResObj {
//     FSV0: number;
//     FSV1: number;
//     prTotalI: number;
//     PercentAR: number;
//     R: number;
//     StockName: string;
//   }

const sendPostRequest = async (url, payload) => {
  let resp = null;
  try {
    resp = await axios.post(url, payload);
    // console.log(Object.entries(resp.data));
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
  return resp;
};

// const stockN = ['GME', 'AAPL', 'AMC'];

const formatDate = (dateString) => {
  const dArr = dateString.split('-');
  return `${dArr[2]}/${dArr[1]}/${dArr[0]}`;
};
const VBarchart = () => {
  const [dataArray, setDataArray] = useState([]);
  const stocks = useSelector(selectStocks);

  console.log(stocks);
  // const [stockNArray, setStockNArray] = useState<string[]>([]);

  // const reqObj = {
  //   stockNames: ['GME', 'AAPL', 'AMC'],
  //   purchaseDates: ['26/03/2020', '26/03/2020', '26/03/2020'],
  //   quantitiesPurchased: [15, 2, 10],
  // };

  useEffect(() => {
    sendPostRequest(
      // 'http://localhost:5000/mayPortfolioRequest1',
      'http://www.mayportfolio.com/mayPortfolioRequest1',
      {
        stockNames: stocks?.map((stock) => stock.stockName),
        purchaseDates: stocks?.map((stock) => stock.purchaseDate).map((date) => formatDate(date)),
        quantitiesPurchased: stocks?.map((stock) => stock.qttPurchased),
      },
    ).then((resp) => {
      console.log(resp);
      const respArray = [];
      if (resp != null) {
        for (const [key, value] of Object.entries(resp.data)) {
          if (key === 'errMessage') {
            throw value;
          }
          const stringResObj = JSON.stringify(value);
          const resObj = JSON.parse(stringResObj);
          console.log(`${key}: ${resObj.R}`);
          respArray.push(resObj.R);
        }
        setDataArray(respArray);
        console.log(dataArray);
      }
    });
  }, []);

  const graphParams = {
    labels: stocks?.map((stock) => stock.stockName),
    datasets: [
      {
        data: dataArray,
        backgroundColor: [
          'rgba( 83, 192, 125 )',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    maintainAspectRatio: false,
    responsive: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="text-center">What returns your stocks registered monthly the past year</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Bar
              type="bar"
              data={graphParams}
              options={options}
              height={188}
              width={375}
              className="mx-auto"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Bar
              type="bar"
              data={graphParams}
              options={options}
              height={188}
              width={375}
              className="mx-auto"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Bar
              type="bar"
              data={graphParams}
              options={options}
              height={188}
              width={375}
              className="mx-auto"
            />
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default VBarchart;
