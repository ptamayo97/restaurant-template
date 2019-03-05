import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Page1 from "./pages/Page1";
import Menu from "./pages/Menu";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className='hero is-fullheight '>
          <Nav />
          <div className='hero-body has-background-warning'>
            <Switch>
              <Route exact path='/' component={Page1} />
              <Route exact path='/menu' component={Menu} />
              <Route exact path='/page3' component={Page3} />
              <Route exact path='/page4' component={Page4} />
              <Route exact path='/page5' component={Page5} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
