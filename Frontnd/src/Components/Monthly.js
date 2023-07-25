import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addStock } from '../../redux/StockSlice2';

function Monthly() {
  const { user } = useAuth0();
  const { stocks2 } = useSelector((state) => state.second);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = user?.sub.split('|')[1];
    // axios.get(`http://localhost:8000/datalist2/${id}`)
    axios.get(`http://www.mayportfolio.com/datalist2/${id}`)
    // axios.get(`/datalist2/${id}`)
      .then((response) => {
        console.log(response.data, 'khjasdkjasdjadskadhkadsbhkahlasdhladhasdn');
        response.data.forEach((stock) => {
          console.log('stock', stock);
          dispatch(addStock(stock));
        });
      }, (error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h4>Worst case scenario</h4>
      <h6>What's the maximum amount of money that you can lose on one bad stock market day?</h6>
      <h3 className="mt-5 mb-5 font-weight-bolder">
        {parseFloat(stocks2[0]?.response_data?.var).toFixed(2)}
        %
        <p>of your portfolio, that is </p>
        $
        {parseFloat(stocks2[0]?.response_data?.var_out).toFixed(2)}
      </h3>
      <h6>If that really happens, your returns would average:</h6>
      <h3 className="mt-5 mb-5 font-weight-bolder">
        {parseFloat(stocks2[0]?.response_data?.es).toFixed(2)}
        %
        <p>, in dollars </p>
        $
        {parseFloat(stocks2[0]?.response_data?.es_hist).toFixed(2)}
      </h3>
      <p align='justify'>
        This scenario above only becomes true 5 times out of 100. It is very unlikely but still something to be aware of as market crashes or bankruptcy of companies you own stocks of do seldom happen. This way, you can prepare yourself to the worst case scenario.
      </p>
      {/* <h4>Recommendations</h4>
      <li>Do not sell</li>
      <li>Wait or buy more</li> */}
      {/* <p className="text-left">Huge internal fraud scandal</p>
      <ul className="text-left">
        <li>Do not sell</li>
        <li>Either wait or buy more</li>
        <li>Sales and profit keep growing</li>
      </ul> */}
    </>
  );
}
export default Monthly;
