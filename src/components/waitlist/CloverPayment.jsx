// @flow
import React, {Component} from "react";
import type {Invoice, Stall} from "../../model/dataModel";
import config from "react-global-configuration";
import {loadScript} from "../../util";
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

type State = {
  paymentObject: any,
  elemLoaded?: boolean,
};

type Props = {
  stall: Stall,
  invoice?: Invoice,
  setShowLoading: any,
  showLoading: boolean,
  handleCreateOrder: any,
};

class CloverPayment extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paymentObject: null,
    };
  }

  setPaymentObject = (val: any) => {
    this.setState({
      paymentObject: val,
    });
  };

  triggerPayment = () => {
    const that = this;
    // Use the iframe's tokenization method with the user-entered card details
    this.state.paymentObject.createToken().then(function (result) {
      if (result.errors) {
        Object.values(result.errors).forEach(function (value) {
          console.error(value);
        });
      } else {
        that.props.handleCreateOrder({
          source: result.token,
          paymentMethod: "CARD", // Only supported payment method with Clover.
        });
      }
    });
  };

  componentDidMount(): * {
    loadScript(config.get("clover_payment_form_js"), () => {
      const clover = new window.Clover(
        this.props.stall.pointOfSaleInfo.cloverInfo.apiAccessKey
      );
      this.setPaymentObject(clover);
      const elements = this.state.paymentObject.elements();
      const commonStyle = {
        "background-color": "#FBFBFB",
        border: "1px solid rgba(134, 134, 134, 0.103229)",
        "box-sizing": "border-box",
        "border-radius": "6px",
        height: "54px",
        padding: "10px",
        "font-family": "National",
        "font-style": "normal",
        "font-weight": 500,
        "font-size": "18px",
        "line-height": "26px",
      };
      const styles = {
        "card-number input": commonStyle,
        "card-date input": commonStyle,
        "card-cvv input": commonStyle,
        "card-postal-code input": commonStyle,
      };
      const cardNumber = elements.create("CARD_NUMBER", styles);
      const cardDate = elements.create("CARD_DATE", styles);
      const cardCvv = elements.create("CARD_CVV", styles);
      const cardPostalCode = elements.create("CARD_POSTAL_CODE", styles);

      cardNumber.mount("#card-number");
      cardDate.mount("#card-date");
      cardCvv.mount("#card-cvv");
      cardPostalCode.mount("#card-postal-code");

      function handleInputErrorEvent(event, element) {
        if (event["error"] && element && element.classList) {
          element.classList.add("border");
          element.classList.add("border-danger");
        } else if (element && element.classList) {
          element.classList.remove("border");
          element.classList.remove("border-danger");
        }
      }

      // Handle real-time validation errors from the card element
      cardNumber.addEventListener("blur", function (event) {
        handleInputErrorEvent(
          event["CARD_NUMBER"],
          document.getElementById("card-number")
        );
      });

      cardDate.addEventListener("blur", function (event) {
        handleInputErrorEvent(
          event["CARD_DATE"],
          document.getElementById("card-date")
        );
      });

      cardCvv.addEventListener("blur", function (event) {
        handleInputErrorEvent(
          event["CARD_CVV"],
          document.getElementById("card-cvv")
        );
      });

      cardPostalCode.addEventListener("blur", function (event) {
        handleInputErrorEvent(
          event["CARD_POSTAL_CODE"],
          document.getElementById("card-postal-code")
        );
      });
    });
  }

  componentWillUnmount(): * {
    // Removes the clover footer from the document.
    const element = document.getElementsByClassName("clover-footer");
    if (element && element.length > 0 && element[0].parentNode) {
      element[0].parentNode.removeChild(element[0]);
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CardInput id="card-number" className="field card-number" />
          </Col>
        </Row>

        <Row>
          <Col>
            <CardInput id="card-date" className="field third-width" />
          </Col>
          <Col>
            <CardInput id="card-cvv" className="field third-width" />
          </Col>
          <Col>
            <CardInput id="card-postal-code" className="field third-width" />

            <div id="card-response" role="alert" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CloverPayment;

const CardInput = styled.div`
    height: 51px;
    margin-bottom: 10px;
    border-radius: 6px,
}
`;
