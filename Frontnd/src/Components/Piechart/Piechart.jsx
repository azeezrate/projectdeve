import React, { Fragment, useEffect, useState } from 'react';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import Plot from 'react-plotly.js';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { addStock } from '../../redux/StockSlice';

// function LoginLayout() {
//   const history = useHistory();
//   const routeChange = () =>{
//     let path = `newPath`;
//     history.push(path);
//   }
// const Piechart = () => {
//   const { user, isAuthenticated } = useAuth0();
//   const [dataArray, setDataArray] = useState([]);
//   const dispatch = useDispatch();
//   const { stocks } = useSelector((state) => state.first);
//   // useEffect(() => {
//   //   console.log('dataArray', dataArray);
//   // }, [dataArray]);
//   const [sendData, setSendData] = useState({});
//   const [seriess, setSeriess] = useState([]);
//   useEffect(() => {
//     const id = user?.sub.split('|')[1];
//     console.log('ID====>', id);
//     axios.get(`http://localhost:8000/datalist1/${id}`)
//       .then((response) => {
//         console.log('First Api Response', response.data);
//         response.data.forEach((stock) => dispatch(addStock(stock)));
//       }, (error) => {
//         console.log(error);
//       });
//   }, []);
//   useEffect(() => {
//     if (stocks.length > 0) {
//       setSendData({});
//       Object.entries(stocks[0].response_data).map(([key, val]) => {
//         setSendData((e) => {
//           try {
//             if (!e[key].includes(val)) {
//               e[key].push(val.toFixed(2));
//             }
//           } catch {
//             e[key] = [val];
//           }
//           return e;
//         });
//         return val;
//       });
//     }
//   }, [stocks]);
//   console.log('stock1 Data', sendData);
//   useEffect(() => {
//     Object.entries(sendData)?.map(([k, v]) => {
//       Object.entries(v)?.map(([sk, sv]) => {
//         Object.entries(sv)?.map(([shk, shv]) => {
//           console.log('shv====>', shv);
//           setDataArray((e) => {
//             console.log('');
//             return [...e, shv];
//           });
//           return shv;
//         });
//         console.log('sv====>', sv);
//         return sv;
//       });
//       console.log('v====>', v);
//       return v;
//     });
//   }, [sendData]);
//   const data = {
//     labels: Object.entries(sendData)?.map(([k, v]) => k),
//     datasets: [{
//       label: 'My First Dataset',
//       data: dataArray,
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)',
//       ],
//       hoverOffset: 4,
//     }],
//   };
//   const options = {
//     maintainAspectRatio: false,
//     responsive: false,
//   };
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <p className="mt-5 p-3 font-weight-bold"><h5>How you have split your investment accross companies</h5></p>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Pie
//             type="pie"
//             data={data}
//             options={options}
//             height={200}
//             width={400}
//             className="mx-auto"
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };
const PieChart = () => {
  const { user, isAuthenticated } = useAuth0();
  const [dataArray, setDataArray] = useState([]);
  const dispatch = useDispatch();
  const { stocks } = useSelector((state) => state.first);
  // useEffect(() => {
  //   console.log('dataArray', dataArray);
  // }, [dataArray]);
  const [sendData, setSendData] = useState({});
  const [seriess, setSeriess] = useState([]);
  const [formData, setFormData] = useState(null);
  const [Stocknames, setstocknames] = useState(null);
  const [PreviousInv, setPreviousInv] = useState(null);
  useEffect(() => {
    const id = user?.sub.split('|')[1];
    console.log('ID====>', id);
    axios.get(`http://127.0.0.1:8000/datalist1/${id}`)
    // axios.get(`http://www.mayportfolio.com/datalist1/${id}`)
      .then((response) => {
        console.log('First Api Response', response.data);
        setstocknames(response.data.stockNames);
        setPreviousInv(response.data.PreviousInv);
        // Stockn = response.data.stockNames;
        // response.data.forEach((stock) => dispatch(addStock(stock)));
      }, (error) => {
        console.log('Error', error);
      });
  }, []);
  // console.log('response Data is1:', Stocknames);
  // console.log('response Data is2:', PreviousInv);
  // useEffect(() => {
  //   if (stocks.length > 0) {
  //     setSendData({});
  //     Object.entries(stocks[0].response_data).map(([key, val]) => {
  //       setSendData((e) => {
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
  // console.log('stock1 Data', sendData);
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
  // console.log('DataArray is:', dataArray);
  // const data = [{
  //   type: 'bar',
  //   x: [-20, -14, -23],
  //   y: ['giraffes', 'orangutans', 'monkeys'],
  //   orientation: 'h',
  //   marker: { color: ['#447adb', '#447adb', '#db5a44', '#447adb'] },
  // }];
  // const layout = {
  //   width: 500,
  //   height: 430,
  //   title: 'Percentage return if you sold your stocks today',
  //   xaxis: {
  //     tickangle: -45,
  //   },
  //   // yaxis: {
  //   //   side: 'left',
  //   // },
  //   yaxis: {
  //     zeroline: false,
  //     gridwidth: 3,
  //     side: 'left',
  //   },
  //   // bargap: 0.05,
  // };
  // console.log('Entries:', Object.entries(sendData)?.map(([k, v]) => {
  //   Object.entries(v)?.map(([sk, sv]) => { Object.entries(sv)?.map(([shk, shv]) => { return shv; } )}); return shv
  // }));
  const data = [
    {
      // values: [112, 454, 65, 544],

      // labels: Object.entries(sendData)?.map(([k, v]) => k),
      // labels: formData.StockNames,
      // labels: ['AMZN', 'TSLA', 'PYPL', 'BABA'],
      labels: Stocknames,
      // datasets: [{
      //   label: 'My First Dataset',
      //   data: [dataArray],
      //   backgroundColor: [
      //     'rgb(255, 99, 132)',
      //     'rgb(54, 162, 235)',
      //     'rgb(255, 205, 86)',
      //   ],
      //   hoverOffset: 4,
      // }],
      // values: formData.PreviousInv,
      // values: [100.0, 80.60313596882095, 44.76096908664324, 9.927274484326576],
      values: PreviousInv,
      type: 'pie',

      marker: {
        colors: ['#2E8B57', '#ECFFDC', '#F5DEB3', '#FFFDD0'],
        // colors: PreviousInv,
        width: 1,
      },
    },
  ];
  return (
    <Container>
      <Row>
        <Col className="mb-5">
          <Plot
            data={data}
            // layout={layout}
            layout={{ width: 500, height: 500, title: 'Your investment spread over companies' }}
            className="mx-auto px-1"
          />
        </Col>
      </Row>
    </Container>
    // <Plot
    //   data={data}
    //   // layout={layout}
    //   layout={{ width: 500, height: 500, title: 'How you have split your investment across companies' }}
    // />
  );

  // var trace1 = {
  //   x: [1, 2, 3, 4],
  //   y: [10, 15, 13, 17],
  //   type: "scatter"
  // };
  // var trace2 = {
  //   x: [1, 2, 3, 4],
  //   y: [16, 5, 11, 9],
  //   type: "scatter"
  // };
  // var data = [trace1, trace2];
  // var graphOptions = {filename: "basic-line", fileopt: "overwrite"};
  // Plotly.Plot(data, graphOptions, function (err, msg) {
  //     console.log(msg);
  // });
};
// export const data1 = Stockn;
export default PieChart;
