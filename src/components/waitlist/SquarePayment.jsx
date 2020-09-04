// @flow
import React, {Component} from "react";
import config from "react-global-configuration";
import type {Invoice, Stall} from "../../model/dataModel";
import {loadScript} from "../../util";
import get from "lodash/get";

type State = {
  paymentObject: any,
};

type Props = {
  stall: Stall,
  invoice?: Invoice,
  setShowLoading: any,
  showLoading: boolean,
  handleCreateOrder: any,
};

class SquarePayment extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("square props", props);
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
    try {
      if (this.state.paymentObject) {
        this.state.paymentObject.requestCardNonce();
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  componentDidMount(): * {
    loadScript(config.get("square_payment_form_js"), () => {
      let payObj = new window.SqPaymentForm({
        // Initialize the payment form elements
        applicationId: config.get("square_app_id"),
        // from AWS dynamo DB square_venue_info table.
        locationId: this.props.stall.pointOfSaleInfo.squareInfo.locationId,
        inputClass: "sq-input",
        autoBuild: false,
        // Customize the CSS for SqPaymentForm iframe elements
        inputStyles: [
          {
            fontSize: "16px",
            lineHeight: "24px",
            padding: "16px",
            placeholderColor: "#a0a0a0",
            backgroundColor: "transparent",
          },
        ],
        // Initialize the credit card placeholders
        cardNumber: {
          elementId: "sq-card-number",
          placeholder: "Card Number",
        },
        cvv: {
          elementId: "sq-cvv",
          placeholder: "CVV",
        },
        expirationDate: {
          elementId: "sq-expiration-date",
          placeholder: "MM/YY",
        },
        postalCode: {
          elementId: "sq-postal-code",
          placeholder: "Postal",
        },
        // Initialize Web Apple Pay placeholder ID
        applePay: {
          elementId: "sq-apple-pay",
        },
        googlePay: {
          elementId: "sq-google-pay",
        },
        callbacks: {
          unsupportedBrowserDetected: function () {
            alert("unsupported browsers");
          },

          methodsSupported: function (methods) {
            let applePayLabel: HTMLElement | null = document.getElementById(
              "sq-apple-pay-label"
            );
            let applePayBtn: HTMLElement | null = document.getElementById(
              "sq-apple-pay"
            );
            if (applePayLabel && applePayBtn && methods.applePay === true) {
              applePayBtn.style.display = "inline-block";
              applePayLabel.style.display = "none";
            }
            let googlePayBtn: HTMLElement | null = document.getElementById(
              "sq-google-pay"
            );
            if (googlePayBtn && methods.googlePay === true) {
              googlePayBtn.style.display = "inline-block";
            }
          },
          createPaymentRequest: () => {
            let cost = (
              get(this.props.invoice, "total.amount", 0) / 100
            ).toFixed(2);
            return {
              requestShippingAddress: false,
              requestBillingInfo: true,
              currencyCode: "USD",
              countryCode: "US",
              total: {
                label: "Order with Sleek",
                amount: cost,
                pending: false,
              },
              lineItems: [
                {
                  label: "Subtotal",
                  amount: cost,
                  pending: false,
                },
              ],
            };
          },
          cardNonceResponseReceived: (errors, nonce, paymentData, contacts) => {
            if (errors) {
              //   Log errors from nonce generation to the browser developer console.
              errors.forEach(function (error) {
                console.error("  " + error.message);
              });
              console.log("Encountered errors, check console for more details");
              return;
            } else {
              this.props.handleCreateOrder({
                source: nonce,
                paymentMethod:
                  paymentData.digital_wallet_type &&
                  paymentData.digital_wallet_type !== "NONE"
                    ? paymentData.digital_wallet_type
                    : "CARD",
              });
            }
          },
        },
      });
      this.setPaymentObject(payObj);
      payObj.build();
    });
  }

  render() {
    return this.state.paymentObject ? (
      <div id="form-container">
        <div id="sq-walletbox">
          <button
            id="sq-google-pay"
            className="button-google-pay"
            disabled={this.props.showLoading}
          />
          <div id="sq-apple-pay-label" className="wallet-not-enabled" />
          {/* Placeholder for Apple Pay on the Web button */}
          <button
            id="sq-apple-pay"
            className="button-apple-pay"
            disabled={this.props.showLoading}
          />

          <div id="sq-walletbox-divider">
            <span id="sq-walletbox-divider-label">Or</span>
            <hr />
          </div>
        </div>
        <div id="sq-ccbox">
          <div id="sq-card-number" />
          <div className="third" id="sq-expiration-date" />
          <div className="third" id="sq-cvv" />
          <div className="third" id="sq-postal-code" />
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export default SquarePayment;
