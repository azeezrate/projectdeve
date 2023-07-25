import React, { Fragment, useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { selectStocks2 } from '../../redux/ConfigureStore';
import { addStock } from '../../redux/StockSlice2';

const VBchart2 = () => {
  const { user, isAuthenticated } = useAuth0();
  const [dataArray, setDataArray] = useState([]);
  const dispatch = useDispatch();
  const { stocks2 } = useSelector((state) => state.second);
  const [sendData, setSendData] = useState({});
  const [seriess, setSeriess] = useState([]);
  useEffect(() => {
    const id = user?.sub.split('|')[1];
    // axios.get(`http://localhost:8000/datalist2/${user?.sub?.split('|')[1]}`)
    axios.get(`http://www.mayportfolio.com/datalist2/${user?.sub?.split('|')[1]}`)
      .then((response) => {
        response.data.forEach((stock) => dispatch(addStock(stock)));
      }, (error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (stocks2.length > 0) {
      setSendData({});
      Object.entries(stocks2[0].response_data).map(([key, val]) => {
        Object.entries(val).map(([sendkey, senvalue]) => {
          setSendData((e) => {
            try {
              if (!e[sendkey].includes(senvalue)) {
                e[sendkey].push(senvalue.toFixed(2));
              }
            } catch {
              e[sendkey] = [senvalue];
            }
            return e;
          });
          return senvalue;
        });
        return val;
      });
    }
  }, [stocks2]);
  useEffect(() => {
    setSeriess([]);
    Object.entries(sendData).map(([key, val]) => setSeriess((e) => {
      console.log('');
      return [...e, { data: val }];
    }));
  }, [sendData]);
  const data = {
    series: seriess,
    options: {
      chart: {
        type: 'bar',
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -1,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: -10,
        colors: ['#fff'],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: ['-100%', '-50%', '0%', '50%'],
        labels: {
          show: true,
        },
      },
      fill: {
        colors: ['#528550'],
      },
    },
  };
  return (
    <Container>
      <Row>
        <Col className="mt-4">
          <p className="text-center font-weight-bold"><h5>What returns your stocks registred monthly in the past year</h5></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="bar"
            height={430}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default VBchart2;
