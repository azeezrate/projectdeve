import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addStock } from '../../redux/StockSlice2';

function Monthly() {
  const { user } = useAuth0();
  const { stocks2 } = useSelector((state) => state.second);
  const dispatch = useDispatch();
  const [var1, setvar1] = useState(null);
  const [varout, setvarout] = useState(null);
  const [es, setes] = useState(null);
  const [eshist, seteshist] = useState(null);
  useEffect(() => {
    const id = user?.sub.split('|')[1];
    console.log('ID====>', id);
    axios.get(`http://127.0.0.1:8000/datalist1/${id}`)
    // axios.get(`http://www.mayportfolio.com/datalist1/${id}`)
      .then((response) => {
        console.log('First Api Response', response.data);
        setvar1(response.data.var);
        setvarout(response.data.var_out);
        setes(response.data.es);
        seteshist(response.data.es_hist);
        // Stockn = response.data.stockNames;
        // response.data.forEach((stock) => dispatch(addStock(stock)));
      }, (error) => {
        console.log('Error', error);
      });
  }, []);
  return (
    <>
      <h4 id="worst_c_s_loc">Worst case scenario</h4>
      <p style={{ fontSize: '14px' }}>
        <br />
        What is the maximum amount of money that you can lose on one bad stock market day?
      </p>
      <h3 className="mt-5 mb-5 font-weight-bolder">
        {parseFloat(var1).toFixed(2)}
        %
        <sub>of your portfolio, that is </sub>
        $
        {parseFloat(varout).toFixed(2)}
      </h3>
      <p style={{ fontSize: '14px' }}>
        If that really happens, your returns would average:
      </p>
      <h3 className="mt-5 mb-5 font-weight-bolder">
        {parseFloat(es).toFixed(2)}
        %
        <sub>, in dollars </sub>
        $
        {parseFloat(eshist).toFixed(2)}
      </h3>
      <p style={{ fontSize: '14px' }} align="justify">
        This scenario above only becomes true 5 times out of 100. It is very unlikely but still something to be aware of as market crashes or bankruptcy of companies you own stocks of do seldom happen. This way, you can prepare yourself to the worst case scenario.
        <br />
        <br />
        <br />
        <br />
      </p>
      {/* <h4>Recommendations</h4>
      <br />
      <li>Do not sell</li>
      <li>
        Wait or buy more
        <br />
        <br />
        <br />
        <br />
      </li> */}
    </>
  );
}
export default Monthly;
