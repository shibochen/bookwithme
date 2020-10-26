import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "shared/Header";
import RentalListing from "components/rental/rental-listing/RentalListing";
import RentalDetail from "components/rental/rental-detail/RentalDetail";
import 'App.css'

const store = require('./reducers').init();

const App = () => {
  return (
    <Provider store= {store}>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route path="/" component={() => <Redirect to="/rentals" />} />
          <Route path="/rentals" component={RentalListing} exact />
          <Route path="/rentals/:id" component={RentalDetail} exact />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
