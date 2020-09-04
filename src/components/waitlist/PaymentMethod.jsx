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
import config from "react-global-configuration";
import {addOrder} from "../../model/userSlice";
import {resetCart} from "../../model/cartSlice";
import {MdError} from "react-icons/all";
import {IconContext} from "react-icons";
import {FindStall, GenerateCurrenyNumber} from "../../util";
import {isValidPhoneNumber} from "react-phone-number-input";
import get from "lodash/get";
import CloverPayment from "./CloverPayment";
import SquarePayment from "./SquarePayment";

type State = {
  showError: boolean,
  showLoading: boolean,
  invoice?: Invoice,
  retry: boolean,
};

class PaymentMethod extends Component<any, State> {
  constructor(props) {
    super(props);
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

  componentDidUpdate(prevProps, prevState) {
    if (
      get(this, "props.location.pathname") === "/payment_method" &&
      get(this, "props.location.pathname" === "/payment_method/retry")
    ) {
      this.setState({retry: true, showLoading: false});
    }
  }

  handlePayWithCard = () => {
    this.refs.paymentImplementation.triggerPayment();
  };

  handleCreateOrder = (paymentResponse) => {
    // Do not send concurrent order request to Sleek.
    if (!this.state.showLoading) {
      this.setShowLoading(true);
      const response = async () => {
        fetch(config.get("backend") + "/order", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: this.props.cart,
            customerName: "Sleek",
            customerPhoneNumber: this.props.userInfo.phoneNumber,
            source: paymentResponse.source,
            paymentMethod: paymentResponse.paymentMethod,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            const newOrder: Order = data.order;
            if (newOrder && newOrder._id) {
              this.props.addOrder({order: data.order});
              this.props.resetCart({
                storeId: this.props.cart.storeId,
                stallId: this.props.cart.stallId,
              });
              this.props.history.push("/payment_confirmation/" + newOrder._id);
            } else {
              this.props.history.push("/payment_method/retry");
              this.setState({retry: true, showLoading: false});
            }
          })
          .catch((error) => {
            console.log("error", error);
            this.props.history.push("/payment_method/retry");
            this.setState({retry: true, showLoading: false});
          });
      };
      response();
    }
  };

  render() {
    if (!isValidPhoneNumber(this.props.userInfo.phoneNumber)) {
      this.props.history.push("/enter_phone");
      this.setShowError(true);
      return "";
    }
    let {showLoading} = this.state;

    return (
      <Wrapper className="container">
        <CheckoutNav history={this.props.history} currPage="PaymentMethod" />
        {!this.state.retry && (
          <TextStylingBox>
            <CheckoutHeadline>Payment Method</CheckoutHeadline>
            <CheckoutText>Select a payment method</CheckoutText>
          </TextStylingBox>
        )}
        {this.state.retry && (
          <TextStylingBox>
            <IconContext.Provider
              value={{
                color: "#EB212A",
                className: "global-class-name",
                size: "64px",
              }}
            >
              <MdError />
            </IconContext.Provider>
            <CheckoutHeadline>
              Your payment was not <br /> successful
            </CheckoutHeadline>
            <CheckoutText>
              Please try again or select a different payment type
            </CheckoutText>
          </TextStylingBox>
        )}

        <div className="row text-center">
          <div className="col-12">
            {this.props.stall.pointOfSaleInfo.type === "CLOVER" ? (
              <CloverPayment
                ref="paymentImplementation"
                stall={this.props.stall}
                // $FlowFixMe
                invoice={this.state.invoice}
                showLoading={showLoading}
                handleCreateOrder={this.handleCreateOrder}
                setShowLoading={this.setShowLoading}
              />
            ) : (
              <SquarePayment
                ref="paymentImplementation"
                stall={this.props.stall}
                invoice={this.state.invoice}
                showLoading={showLoading}
                handleCreateOrder={this.handleCreateOrder}
                setShowLoading={this.setShowLoading}
              />
            )}
          </div>
        </div>
        <AmountWrapper className="">
          <span className="text-muted">Total</span>
          <span className="d-block finalTotal">
            {this.state.invoice
              ? GenerateCurrenyNumber(this.state.invoice.total)
              : ""}
          </span>
        </AmountWrapper>

        <ActionButtonWrapper>
          <ActionButton
            text={showLoading ? "Processing..." : "Place order"}
            onClickCallback={
              !showLoading
                ? this.handlePayWithCard
                : function () {
                    console.log("loading");
                  }
            }
            disabled={showLoading}
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
    resetCart: (storeObject) => {
      dispatch(resetCart(storeObject));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCart,
    userInfo: state.userInfo,
    checkoutState: state.checkoutState,
    // Find the correct stall in both stall as well as event states.
    stall:
      state.shoppingCart.stallId === state.sleekStallState._id
        ? state.sleekStallState
        : FindStall(state.sleekEventState, state.shoppingCart.stallId),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);

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
