import React, { useState, useEffect } from 'react';
import './CheckoutForm.css';
import CheckOutButton from '../CheckOutButton/CheckOutButton';

const publicPath = process.env.PUBLIC_URL;

const CheckoutForm = () => (
  <section>
    <br />
    <div className="container">
      <h1 style={{ color: '#53c07d' }}>Dashboard Subscription</h1>
      <h3 style={{ color: '#53c07d', fontWeight: '200px' }}>Become a member TODAY!</h3>
      <br />
      <br />
      <img
        alt=""
        src={`${publicPath}/images/dashboard.png`}
        width="25%"
        height="25%"
        // style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
        className="d-inline-block align-center"
      />
      <br />
      <br />
      <br />
    </div>
    <div className="container">
      <table style={{ width: '60%' }} align="center">
        <tr>
          <th style={{ 'background-color': 'white', color: 'white' }}>L</th>
          <th style={{ 'background-color': 'white', color: 'white' }}>L</th>
          <th style={{
            'background-color': '#53c07d', 'font-size': '23px', color: 'white',
          }}
          >
            <b>PREMIUM</b>
          </th>
        </tr>
        <tr>
          <th rowSpan="2" style={{ width: '33%', 'font-size': '25px' }}>
            &nbsp;
            <b>Pricing plan</b>
            <br />
            <span style={{ 'font-size': '14px', weight: 'bold' }}><b>What is included?</b></span>
          </th>
          <th style={{
            'background-color': 'rgba(83, 192, 125, 0.4)', width: '33%', 'font-size': '23px', color: 'white',
          }}
          >
          &nbsp;
            <b>BASIC</b>
          </th>
          <th style={{
            'background-color': '#53c07d', width: '33%', 'font-size': '70%', color: 'white',
          }}
          >
          &nbsp;
            <b>MOST POPULAR</b>
          </th>
        </tr>
        <tr>
          <td style={{
            color: '#53c07d', 'font-size': '150%', 'vertical-align': 'middle',
          }}
          >
          &nbsp;
            <b>$3</b>
            <p style={{ color: '#717070', 'font-size': '55%' }}>per month</p>
          </td>
          <td style={{
            color: '#53c07d', 'font-size': '150%', 'vertical-align': 'middle',
          }}
          >
          &nbsp;
            <b>$4</b>
            <p style={{ color: '#717070', 'font-size': '55%' }}>per month</p>
          </td>
        </tr>
        <tr>
          <td className="list_items">&nbsp;Composition of portfolio</td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
        </tr>
        <tr>
          <td className="list_items">&nbsp;Percentage returns</td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
        </tr>
        <tr>
          <td className="list_items">&nbsp;Distribution of returns</td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
        </tr>
        <tr>
          <td className="list_items">&nbsp;Distribution of portfolio</td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
        </tr>
        <tr>
          <td className="list_items">&nbsp;Connection between stocks</td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
        </tr>
        <tr>
          <td className="list_items">&nbsp;Performance compared to market</td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/x-circle.png`}
              width="30"
              height="30"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
        </tr>
        <tr>
          <td className="list_items">&nbsp;Risk of stocks</td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/x-circle.png`}
              width="30"
              height="30"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
        </tr>
        <tr>
          <td className="list_items">&nbsp;Value at risk</td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/x-circle.png`}
              width="30"
              height="30"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
          <td>
            &nbsp;
            <img
              alt=""
              src={`${publicPath}/images/green_tick.png`}
              width="25"
              height="25"
              style={{ 'vertical-align': 'middle', margin: '12px 12px' }}
              className="d-inline-block align-center"
            />
          </td>
        </tr>
      </table>
      <br />
      <br />
      <CheckOutButton />
      {/* <div style={{ backgroundColor: '#f7f5f2' }}>
        <div className="d-flex" style={{ backgroundColor: '#DCDCDC' }}>
          <input type="checkbox" className="checkbox-round ml-3 mt-3" />
          <div className="ml-5 shadow p-2 mt-1" style={{ width: '100%', textAlign: 'start' }}>
            <p style={{ paddingLeft: '40px' }}>Composition of Portfolio</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <input type="checkbox" className="checkbox-round ml-3 " />
          <p style={{ paddingLeft: '95px' }}>
            Percentage returns
          </p>
        </div>
        <div className="d-flex" style={{ backgroundColor: '#DCDCDC' }}>
          <input type="checkbox" className="checkbox-round ml-3 mt-3" />
          <div className="ml-5 shadow p-2 mt-1" style={{ width: '100%', textAlign: 'start' }}>
            <p style={{ paddingLeft: '40px' }}>Distribution of returns</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="testing">
            <input type="checkbox" className="checkbox-round ml-3 " />
          </div>
          <p
            style={{ paddingLeft: '95px' }}
          >
            Distribution of your por...
          </p>
        </div>
        <div className="d-flex" style={{ backgroundColor: '#DCDCDC' }}>
          <input type="checkbox" className="checkbox-round ml-3 mt-3" />
          <div className="ml-5 shadow p-2 mt-1" style={{ width: '100%', textAlign: 'start' }}>
            <p style={{ paddingLeft: '40px' }}>Link between pairs of...</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <input type="checkbox" className="checkbox-round ml-3 " />
          <p
            style={{ paddingLeft: '95px' }}
          >
            Performance of your...
          </p>
        </div>
        <div className="d-flex" style={{ backgroundColor: '#DCDCDC' }}>
          <input type="checkbox" className="checkbox-round ml-3 mt-3" />
          <div className="ml-5 shadow p-2 mt-1" style={{ width: '100%', textAlign: 'start' }}>
            <p style={{ paddingLeft: '40px' }}>Risk of single stocks...</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <input type="checkbox" className="checkbox-round ml-3 " />
          <p
            style={{ paddingLeft: '95px' }}
          >
            Value of rick
          </p>
        </div>
        <div className="d-flex" style={{ backgroundColor: '#DCDCDC' }}>
          <input type="checkbox" className="checkbox-round ml-3 mt-3" />
          <div className="ml-5 shadow p-2 mt-1" style={{ width: '100%', textAlign: 'start' }}>
            <p style={{ paddingLeft: '40px' }}>Forecasts of risk..</p>
          </div>
        </div>
        <form
          action="/create-checkout-session"
          method="POST"
        >
          <div className="d-flex justify-content-center mt-5">
            <div className="row" style={{ display: 'flex', alignItems: 'flex-end' }}>
              <div className="col-xs-4">
                <button type="submit" className="btn-dark m-3 p-3" style={{ borderRadius: '5%', height: '40%', width: '90%' }}>XX.XX/1month</button>
              </div>
              <div className="col-xs-4">
                <h4 className="text-success">save 10%</h4>
                <button type="submit" className="btn-dark m-3 p-3 pb-3" style={{ borderRadius: '5%', height: '40%', width: '90%' }}>XX.XX/6month</button>
              </div>
              <div className="col-xs-4">
                <h4 className="text-success">save 25%</h4>
                <button type="submit" className="btn-success m-3 p-3" style={{ borderRadius: '5%', height: '40%', width: '90%' }}> XX.XX/1year</button>
              </div>
            </div>
          </div>
        </form>
        <p style={{ color: 'green' }}>Start your free trial now</p>
        <br />
      </div> */}
    </div>
    <br />
  </section>
);
export default CheckoutForm;
