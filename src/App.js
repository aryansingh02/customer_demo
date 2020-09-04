// @flow
import React, {Component} from "react";
import config from "react-global-configuration";
import Helmet from "react-helmet";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PaymentMethod from "./components/waitlist/PaymentMethod";
import PaymentConfirmation from "./components/waitlist/PaymentConfirmation";
import configuration from "./config.js";
import styled from "styled-components";
import "./App.css";
import {ActiveThemeStyleSheet} from "./util";
import "react-toastify/dist/ReactToastify.css";
import WaitList from "./components/waitlist/WaitList";
import FillDetails from "./components/waitlist/FillDetails";
import DemoPayment from "./components/waitlist/DemoPayment";

config.set(configuration);

//$FlowFixMe
require("./styles/" + ActiveThemeStyleSheet());

class App extends Component<any, any> {
  containerRef: {current: null | HTMLDivElement};
  constructor(props: any) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      width: 800,
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    if (window.innerWidth <= 600) {
      this.setState({width: window.innerWidth});
    } else {
      this.setState({width: 600});
    }
  }

  renderWithState = () => {
    let homeRoute = <Route exact path="/" component={WaitList} />;
    return (
      <OuterContainer className="container">
        <div className="row justify-content-center">
          <AppWrapper
            width={this.state.width}
            className="align-self-center"
            ref={this.containerRef}
          >
            <Switch>
              {homeRoute}
              <Route exact path="/payment_method" component={PaymentMethod} />
              <Route exact path="/payment_confirmation" component={PaymentConfirmation} />
              <Route exact path="/waitlist" component={WaitList} />
              <Route
                exact
                path="/waitlist/FillDetails"
                component={FillDetails}
              />
              <Route exact path="/demo_payment" component={DemoPayment} />
            </Switch>
          </AppWrapper>
        </div>
      </OuterContainer>
    );
  };

  render() {
    const AppElement = this.renderWithState();
    return (
      <React.Fragment>
        <Helmet>
          <title> Sleek - Waiting in lines reinvented</title>
        </Helmet>
        <BrowserRouter>
          <div className="App">{AppElement}</div>
          <ToastContainer
            style={{
              bottom: "80px",
              top: "inherit",
              width: `${this.state.width - 40}px`,
              left: "50%",
              transform: "translate(-50%, 0)",
              borderRadius: "6px",
              padding: 0,
            }}
            hideProgressBar={true}
            autoClose={1200}
          />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

const OuterContainer = styled.div`
  padding: 0;
`;

const AppWrapper = styled.div`
  width: ${(props) => props.width}px;
`;
