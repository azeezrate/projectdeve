import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MyNavBar from './Components/Navbar/Navbar';
import CheckoutForm from './Components/Checkout/CheckoutForm';
import Secondapi from './Components/Secondapi/Secondapi';
import DashboardHeader from './Components/DashboardHeader/DashboardHeader';
import ContentArea from './Components/ContentArea/ContentArea';
import Sidebar from './Components/Sidebar/Sidebar';
import ContentPane from './Components/ContentPane/ContentPane';
import ContentCard from './Components/ContentCard/ContentCard';
import Paragraph2 from './Components/ContentCard/Paragraph2';
import Paragraph3 from './Components/ContentCard/Paragraph3';
import Footer from './Components/Footer/Footer';
import InputForm from './Components/InputForm/InputForm';
import InputForm2 from './Components/InputForm/InputForm2';
import InputForm2Screen from './Components/InputForm/InputForm2Screen';
import Piechart from './Components/Piechart/Piechart';
import VBchart2 from './Components/VBarchart/VBchart2';
import VBarchart from './Components/VBarchart/VBarchart';
import HBarchart from './Components/HBarchart/HBarchart';
import Scatterchart from './Components/Scatterchart/Scatterchart';
import store from './redux/ConfigureStore';
import Loading from './Components/Loading/Loading';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import LandingPage from './Components/LandingPage/LandingPage';
import StackedChart from './Components/StackedChart/StackedChart';
import StackedParagraph from './Components/StackedChart/StackedParagraph';
import HistogramChart from './Components/Histogram/HistogramChart';
import HisParagraph from './Components/Histogram/HisParagraph';
import Heatmap from './Components/Heatmap/Heatmap';
import Monthly from './Components/MonthlyStandardDeviation/Monthly';
import PricingTable from './Components/Checkout/PricingTableStripe';

const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  const [message, setMessage] = useState('');
  const { user } = useAuth0();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <MyNavBar />
      {isAuthenticated && <DashboardHeader />}
      <Switch>
        <Route exact path="/dashboard">
          <ContentArea
            left={<Sidebar />}
            right={(
              <ContentPane
                user={user}
                child0={(
                  <ContentCard
                    child0={<Piechart />}
                    child1={<HBarchart />}
                  />
              )}
                child1={(
                  <ContentCard
                    // child0={<VBchart2 />}
                    child0={<Scatterchart />}
                    child2={<Paragraph2 />}
                  />
              )}
                child2={(
                  <ContentCard
                    child0={<StackedChart />}
                    child1={<StackedParagraph />}
                  />
            )}
                child3={(
                  <ContentCard
                    child0={<HistogramChart />}
                    child1={<HisParagraph />}
                  />
            )}
                child4={(
                  <ContentCard
                    child0={<Heatmap />}
                    child2={<Paragraph3 />}
                  />
              )}
                child5={(
                  <Monthly />
                )}
              />
          )}
          />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/secondapi" component={Secondapi} />
        <ProtectedRoute component={InputForm} path="/inputForm" />
        <ProtectedRoute component={InputForm2} path="/inputForm2" />
        <ProtectedRoute component={InputForm2Screen} path="/inputForm2Screen" />
        <Route exact path="/logout">
          <p>Logged out</p>
        </Route>
        <Route exact path="/checkout">
          <CheckoutForm />
        </Route>
        <Route exact path="/pricingtable">
          <PricingTable />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;

// <script async src="https://js.stripe.com/v3/pricing-table.js">
//     </script>
