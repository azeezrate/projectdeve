import React,
{ useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { addStock } from '../../redux/StockSlice2';

// import { Link } from 'react-router-dom'
// import Rating from '../components/Rating'
// import {useDispatch,useSelector} from 'react-redux'
// import {listProductDetails} from '../actions/productAction'
// import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
function InputForm2Screen() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    const id = user.sub.split('|')[1];
    console.log('user Id', id);
    // axios.get(`http://localhost:8000/datalist2/${user.sub.split('|')[1]}`)
    axios.get(`http://www.mayportfolio.com/datalist2/${user.sub.split('|')[1]}`)
      .then((response) => {
        console.log(response.data);
        response.data.forEach((stock) => dispatch(addStock(stock)));
      }, (error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>InputForm2SCreen</h1>
    </div>
  );
}
export default InputForm2Screen;
