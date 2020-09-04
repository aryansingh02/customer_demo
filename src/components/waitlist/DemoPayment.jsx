// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import {
  CheckoutHeadline,
  CheckoutText,
  defaultFlex,
} from "../../styles/CommonStyles";
import type {Invoice, Order} from "../../model/dataModel";
import styled from "styled-components";
import CheckoutNav from "./CheckoutNav";
import ActionButton from "./ActionButton";
import {addOrder} from "../../model/userSlice";
import {resetCart} from "../../model/cartSlice";
import {insertBeginning, insertEnd} from "../../model/userDemoSlice";
import get from "lodash/get";
import SquarePayment from "./SquarePayment";

type State = {
  showError: boolean,
  showLoading: boolean,
  invoice?: Invoice,
  retry: boolean,
};

class DemoPayment extends Component<any, State> {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      showError: false,
      showLoading: false,
      retry: false,
    };
  }

  setShowLoading = (val) => {
    this.setState({
      showLoading: val,
    });
  };

  setShowError = (val) => {
    this.setState({
      showError: val,
      showLoading: false,
    });
  };

  componentDidMount() {
    this.setState({
      invoice: this.props.checkoutState.invoice,
    });
    if (get(this, "props.location.pathname") === "/payment_method/retry") {
      this.setState({retry: true, showLoading: false});
    }
  }

  componentDidUpdate(prevProps, prevState) {}

  handlePayWithCard = () => {};

  handleCreateOrder = () => {
    // Do not send concurrent order request to Sleek.
    // let fakeOrder = {
    //   ...this.props.userDemo.orders[this.props.userDemo.orders.length - 1],
    // };
    // console.log("fakeorder", fakeOrder);
    // fakeOrder.name = this.props.userDemo.name;
    // fakeOrder.phone = this.props.userDemo.phone;
    // this.props.insertBeginning(fakeOrder);
    this.props.history.push("/payment_confirmation");
  };

  render() {
    let {showLoading} = this.state;

    return (
      <Wrapper className="container">
        <CheckoutNav history={this.props.history} currPage="DemoPayment" />

        <TextStylingBox>
          <CheckoutHeadline>Payment Method</CheckoutHeadline>
          <CheckoutText>Select a payment method</CheckoutText>
        </TextStylingBox>

        <div className="row text-center">
          <div className="col-12">
            <SquarePayment
              ref="paymentImplementation"
              stall={this.props.userDemo.stall}
              invoice={this.state.invoice}
              showLoading={showLoading}
              handleCreateOrder={this.handleCreateOrder}
              setShowLoading={this.setShowLoading}
            />
          </div>
        </div>
        <AmountWrapper className="">
          <span className="text-muted">Total</span>
          <span className="d-block finalTotal">$ 10</span>
        </AmountWrapper>

        <ActionButtonWrapper>
          <ActionButton
            text={"Place order"}
            onClickCallback={() => this.handleCreateOrder()}
            page="demo"
          />
        </ActionButtonWrapper>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOrder: (item) => {
      dispatch(addOrder(item));
    },
    insertBeginning: (order) => {
      dispatch(insertBeginning(order));
    },
    resetCart: (storeObject) => {
      dispatch(resetCart(storeObject));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    userDemo: state.userDemoState,
    cart: state.shoppingCart,
    userInfo: state.userInfo,
    checkoutState: state.checkoutState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoPayment);

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  padding: 0 20px;
`;

const AmountWrapper = styled(defaultFlex)`
  position: absolute;
  bottom: 75px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ActionButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);
`;

const TextStylingBox = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;
