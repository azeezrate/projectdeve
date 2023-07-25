import React, { Fragment, useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import { Scatter } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import faker from 'faker';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { addStock } from '../../redux/StockSlice2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const Scatterchart = () => {
  const { user } = useAuth0();
  const { stocks2 } = useSelector((state) => state.second);
  const dispatch = useDispatch();
  const [sendData, setSendData] = useState([]);
  const [seriess, setSeriess] = useState([]);
  const [FullLoc1, setFullLoc1] = useState(null);
  const [FullLoc0, setFullLoc0] = useState(null);
  const [Full1Loc1, setFull1Loc1] = useState(null);
  const [Full1Loc0, setFull1Loc0] = useState(null);
  const [stockNames, setstockNames] = useState(null);
  const [Labels, setLabels] = useState(null);
  useEffect(() => {
    const id = user?.sub.split('|')[1];
    console.log('ID====>', id);
    // axios.get(`http://localhost:8000/datalist1/${id}`)
    axios.get(`http://www.mayportfolio.com/datalist1/${id}`)
      .then((response) => {
        console.log('First Api Response', response.data);
        setFullLoc1(response.data.FullLoc1);
        setFullLoc0(response.data.FullLoc0);
        setFull1Loc1(response.data.Full1Loc1);
        setFull1Loc0(response.data.Full1Loc0);
        setstockNames(response.data.stockNames);
        setLabels(response.data.Labels);
        // Stockn = response.data.stockNames;
        // response.data.forEach((stock) => dispatch(addStock(stock)));
      }, (error) => {
        console.log('Error', error);
      });
  }, []);
  // useEffect(() => {
  //   const id = user?.sub.split('|')[1];
  //   console.log('User id is:', id);
  //   axios.get(`http://localhost:8000/datalist2/${id}`)
  //     .then((response) => {
  //       console.log(response.data, 'khjasdkjasdjadskadhkadsbhkahlasdhladhasdn');
  //       response.data.forEach((stock) => {
  //         console.log('stock', stock);
  //         dispatch(addStock(stock));
  //       });
  //     }, (error) => {
  //       console.log(error);
  //     });
  // }, []);
  // useEffect(() => {
  //   if (stocks2.length > 0) {
  //     console.log('Stocks2 is:', stocks2);
  //     setSendData([]);
  //     setSeriess([]);
  //     Object.entries(stocks2[0].response_data).map(([key, val]) => {
  //       if (key !== 'var' && key !== 'var_out' && key !== 'es' && key !== 'es_hist') {
  //         setSendData((e) => {
  //           console.log(val, 'etVal(val)');
  //           return [...e, {
  //             label: key,
  //             data: [{
  //               x: val.posEnd,
  //               y: val.stds,
  //             }],
  //             borderColor: 'rgba(82, 133, 80, 1)',
  //             backgroundColor: 'rgba(82, 133, 80, 0.5)',
  //           }];
  //         });
  //       }
  //       return val;
  //     });
  //   }
  //   console.log(stocks2, 'stocks2');
  // }, [stocks2]);
  // useEffect(() => {
  //   console.log(sendData, 'sendData');
  // }, [sendData, seriess]);
  // const labels = ['-20%', '-10%', '0%', '10%', '20%'];
  // const data = {
  //   labels,
  //   datasets: sendData,
  // };
  // console.log(data, '==========================data');
  // return (
  //   <>
  //     <Container>
  //       <Row>
  //         <Col className="mt-4">
  //           <p className="text-center font-weight-bold">Standard deviation-total returns</p>
  //         </Col>
  //       </Row>
  //       <Row>
  //         <Col>
  //           <Scatter options={options} data={data} style={{ height: '100%', width: '100%' }} />
  //         </Col>
  //       </Row>
  //     </Container>
  //   </>
  // );
  const layout = {
    width: 530,
    height: 440,
    // bargap: 0.05,
    // bargroupgap: 0.2,
    // barmode: 'overlay',
    title: 'How much return have your stocks provided, <br> given the risk they bear?',
    xaxis: { title: 'Risk' },
    yaxis: { title: 'Returns' },
  };
  const layout1 = {
    width: 530,
    height: 440,
    // bargap: 0.05,
    // bargroupgap: 0.2,
    // barmode: 'overlay',
    title: 'Your portfolio risk vs market risk',
    xaxis: { title: 'Risk' },
    yaxis: { title: 'Returns' },
  };
  return (
    <Container>
      <Row>
        <Col className="col-md-6">
          <Plot
            data={[
              {
                // x: [2.981640, 4.120267, 3.601639, 4.613731],
                // y: [-41.944518, -42.157445, -66.932410, -46.000721],
                x: FullLoc1,
                y: FullLoc0,
                type: 'scatter',
                mode: 'markers+text',
                text: stockNames,
                textposition: 'top center',
                marker: {
                  size: 16,
                  color: FullLoc1,
                  colorscale: [[0, '#B2DEB7'], [0.25, '#7FC598'], [0.45, '#5CAE89'], [0.65, '#3F927E'], [0.85, '#2A7271'], [1, '#1E5261']],
                },
              },
              // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={layout}
            className="mx-auto"
          />
        </Col>
        <Col className="col-6">
          <Plot
            data={[
              {
                // x: [1.442892, 1.506315, 3.077091],
                // y: [-12.677872, -11.355584, -46.000721],
                x: Full1Loc1,
                y: Full1Loc0,
                type: 'scatter',
                mode: 'markers+text',
                text: Labels,
                textposition: 'top center',
                marker: {
                  size: 16,
                  color: Full1Loc1,
                  colorscale: [[0, '#B2DEB7'], [0.25, '#7FC598'], [0.45, '#5CAE89'], [0.65, '#3F927E'], [0.85, '#2A7271'], [1, '#1E5261']],
                },
              },
              // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={layout1}
            className="mx-auto px-1"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Scatterchart;
