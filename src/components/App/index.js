import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/index";
import Landing from "../Landing/index";
import Signup from "../signup/index";
import Login from "../login/index";
import Footer from "../Footer/index";
import ErrorPage from "../ErrorPage/index";
import Home from "../Home/index";
import Booking from '../Booking/Booking'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/Landing" component={Landing} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Booking" component={Booking}/>
          <Route component={ErrorPage} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
