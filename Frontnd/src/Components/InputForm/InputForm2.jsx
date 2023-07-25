import React, { Fragment, useState } from 'react';
import axios from 'axios';
import {
  Col, Row, Form, Button, Container,
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { addStock } from '../../redux/StockSlice2';

const InputForm2 = () => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [stocks2, setStocks2] = useState([{
    stockName: '',
    interval: '',
    qttPurchased: 1,
  }]);
  const [validated, setValidated] = useState(false);
  // const [nameMessageDisplayed, setnameMessageDisplayed] = useState([false]);

  const handleSubmit = (e) => {
    const finalData = {
      user: user.sub.split('|')[1],
      form_data: {
        stockNames: [],
        interval: '',
        quantitiesPurchased: '',
      },
    };
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    // const { elements } = form;
    // validateInputs(elements);
    // console.log('el', elements);
    console.log(form.checkValidity());
    if (form.checkValidity() === true) {
      // stocks2.forEach((stock) => dispatch(addStock(stock)));
      console.log(stocks2, 'val');
      stocks2.map((itm) => {
        finalData.form_data?.stockNames.push(itm?.stockName);
        finalData.form_data.interval = itm?.interval;
        finalData.form_data.quantitiesPurchased = itm?.qttPurchased;
        return itm;
      });
      console.log(finalData, 'finalData');
      // axios.post('http://localhost:8000/datalist2', finalData)
      axios.post('http://www.mayportfolio.com/datalist2', finalData)
        .then((response) => {
          console.log(response.data, 'RESPONSE');
          setRedirect(true);
        }, (error) => {
          console.log(error);
        });
      // const formstocks = [...stocks2];
      // console.log(formstocks);
      // axios.post('http://localhost:8000/datalist2', formstocks)
      //   .then((response) => {
      //     console.log(response.data);
      //   }, (error) => {
      //     console.log(error);
      //   });
      // // e.preventDefault();
      // // e.stopPropagation();
      // setRedirect(true);
    }
    setValidated(true);
    // setValidated(true);
  };
  const handleAddRow = () => {
    setStocks2([...stocks2, {
      stockName: '',
      interval: '',
      qttPurchased: 1,

    }]);
    // setnameMessageDisplayed([...nameMessageDisplayed, false]);
  };
  const deleteRow = (i) => {
    const newStocks = [...stocks2];
    newStocks.splice(i, 1);
    setStocks2(newStocks);
  };

  const altStocks = (i, field) => (e) => {
    const newStocks = [...stocks2];
    switch (field) {
      case 'name':
        newStocks[i].stockName = e.target.value;
        // validateNameInput(e.target);
        break;
      case 'interval':
        newStocks[i].interval = e.target.value;
        // validateDateInput(e.target);
        break;

      case 'quantity':
        newStocks[i].qttPurchased = Number(e.target.value);
        // validateQuantityInput(e.target);

        break;
      default:
        console.log('unexpected field type');
    }
    console.log('New Stock', newStocks);
    setStocks2(newStocks);
  };

  const getErrorMessage = (e) => {
    console.log(e);
    console.log('REEEEE');
  };

  const generateRows = () => {
    const rows = [];

    for (let i = 0; i < stocks2.length; i += 1) {
      rows.push(
        <Row className="mb-2" key={i}>
          <Col>
            <Form.Control
              required
              type="text"
              placeholder="TSLA"
              value={stocks2[i].stockName}
              onChange={(altStocks(i, 'name'))}
              name="stockName"
              minLength={3}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid name
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Control
              required
              type="text"
              placeholder="dd/mm/yyyy"
              value={stocks2[i].interval}
              onChange={altStocks(i, 'interval')}
              name="interval"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid date
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder=""
              value={stocks2[i].qttPurchased}
              onChange={altStocks(i, 'quantity')}
              name="quantity"
              min={1}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid number
            </Form.Control.Feedback>
          </Col>
          <Col
            className="text-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button className="mr-1" size="sm" onClick={() => deleteRow(i)}> - </Button>
            {' '}
            delete row
          </Col>
        </Row>,
      );
    }
    return rows;
  };

  if (redirect) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Container fluid>
        <Form onSubmit={handleSubmit} validated={validated} noValidate>
          <Row className="mt-2">
            <Col className="text-center">
              <p className="h6">Stocks</p>
            </Col>
            <Col className="text-center">
              <p className="h6"> Purchase date </p>
            </Col>
            <Col className="text-center">
              <p className="h6"> Quantity</p>
            </Col>
            <Col className="text-center">
              {/* <p className="h6">delete</p> */}
            </Col>
          </Row>
          {generateRows()}
          <Row className="mt-2">
            <Col>
              <Button className="ml-2" size="sm" onClick={handleAddRow}>+</Button>
              {' '}
              Add new row
            </Col>
            <Col />
            <Col />
            <Col />

          </Row>
          <Row className="my-2">
            <Col md={3} />
            <Col md={6} className="text-center">
              <Button type="submit">
                Submit
              </Button>
            </Col>
            <Col md={3} />

          </Row>
        </Form>

      </Container>

    </>
  );
};

export default InputForm2;
