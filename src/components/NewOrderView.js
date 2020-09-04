// @flow
import React, {Fragment} from "react";
import type {Order, UserInfo} from "../model/dataModel";
import {withStyles} from "@material-ui/core/styles";
import config from "react-global-configuration";
import get from "lodash/get";
import styled from "styled-components";
import RoamingHungerNavbar from "./RoamingHungerNavbar";
import {ExtractTime, FormatDateTime, GenerateCurrenyNumber} from "../util";
import {GoCheck} from "react-icons/go";
import {IconContext} from "react-icons";
import {
  CheckoutHeadline,
  CommonP,
  defaultFlex,
  flexColumnDiv,
} from "../styles/CommonStyles";

const CustomStepIcon = () => {
  return (
    <CustomDiv>
      <InnerDiv></InnerDiv>
    </CustomDiv>
  );
};

const CustomAltIcon = () => {
  return (
    <AltWrapper>
      <IconContext.Provider
        value={{
          color: "#00BA89",
          className: "global-class-name",
          size: "14px",
        }}
      >
        <GoCheck />
      </IconContext.Provider>
    </AltWrapper>
  );
};

type OrderViewState = {
  userInfo?: UserInfo,
  currentOrderIndex?: number,
  order: any | null,
  showCancelButtons: boolean,
};

const styles = (theme) => ({
  root: {
    backgroundColor: "red",
  },
  MuiPaperRoot: {
    padding: 0,
  },
  MuiStepperRoot: {
    padding: "7px",
  },
  MuiStepConnectorVertical: {
    marginLeft: "8px",
  },
});

class NewOrderView extends React.Component<any, OrderViewState> {
  interval: any;
  constructor(props: any) {
    super(props);
    this.state = {
      order: null,
      showCancelButtons: false,
    };
  }

  componentDidMount() {
    this.fetchOrderData();
    this.updateOrderOnInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateOrderOnInterval() {
    this.interval = setInterval(async () => {
      this.fetchOrderData();
    }, 10000);
  }

  async fetchOrderData() {
    const response = await fetch(
      config.get("backend") + "/order?id=" + this.props.match.params.id
    );
    const order = await response.json();
    if (order) {
      this.updateOrderInState(order);
    }
  }

  updateOrderInState(newOrder: Order) {
    this.setState({order: newOrder});
  }

  renderOrderStatus = (status) => {
    if (status === "RECEIVED") {
      return {
        major: "Order Received",
        minor: "Your order has been received",
      };
    } else if (status === "PREPARING") {
      return {
        major: "Order Preparation",
        minor: "Your order is being prepared",
      };
    } else if (status === "READY") {
      return {
        major: "Ready to pickup",
        minor: "Your order is ready to pickup!",
      };
    }
    return {
      major: status,
      minor: "",
    };
  };

  alternateStepper = () => {
    if (this.state.order && get(this.state, "order.updates")) {
      return this.state.order.updates.map((update, index) => {
        if (update.type === "STATUS_CHANGE") {
          return (
            <Fragment key={index}>
              <StepperRow>
                {this.state.order &&
                index === this.state.order.updates.length - 1 ? (
                  <CustomStepIcon />
                ) : (
                  <CustomAltIcon />
                )}
                <StepperLabel>
                  {this.renderOrderStatus(update.newStatus).major}
                </StepperLabel>
              </StepperRow>

              <SpanContainer>
                {this.state.order &&
                  index !== this.state.order.updates.length - 1 && (
                    <StepperSpan />
                  )}
                <MinorOrderText
                  last={
                    this.state.order &&
                    index === this.state.order.updates.length - 1
                  }
                >
                  {this.renderOrderStatus(update.newStatus).minor}
                </MinorOrderText>
              </SpanContainer>
            </Fragment>
          );
        }
      });
    }
  };

  render() {
    const {classes} = this.props;
    return (
      <Fragment>
        {this.state.order && (
          <OrderWrapper className="container">
            <NavbarWrapper>
              <RoamingHungerNavbar />
            </NavbarWrapper>
            <OrderBody>
              <HeadlineWrapper>
                <CheckoutHeadline>Track Order</CheckoutHeadline>
              </HeadlineWrapper>
              <OrderIdText>#{get(this.state, "order._id")}</OrderIdText>
              <OrderDetailsWrapper className="row">
                <OrderIdColumn className="col-5 col-xs-5">
                  <OrderLabel>Amount Paid</OrderLabel>
                  <OrderText>
                    {GenerateCurrenyNumber(
                      get(this.state, "order.invoice.total")
                    )}
                  </OrderText>
                </OrderIdColumn>
                <PickupDetailsColumn className="col-7 col-xs-7">
                  <OrderLabel>
                    {/*modify this hardcoded data*/}
                    Created On:{" "}
                    {this.state.order &&
                      FormatDateTime(this.state.order.creationTimestamp, true)}
                  </OrderLabel>
                  {/*remove this hardcoded data*/}
                  <PickupText>
                    {this.state.order &&
                      ExtractTime(this.state.order.creationTimestamp)}
                  </PickupText>
                </PickupDetailsColumn>
              </OrderDetailsWrapper>
              <OrderStepupWrapper>{this.alternateStepper()}</OrderStepupWrapper>
              {this.state.showCancelButtons && (
                <BottomButtonWrapper>
                  <GetDirectionButton>
                    <GetDirectionText>Get Direction</GetDirectionText>
                  </GetDirectionButton>
                  <CancelOrderButton>
                    <CancelOrderText>Cancel Order</CancelOrderText>
                  </CancelOrderButton>
                </BottomButtonWrapper>
              )}
            </OrderBody>
          </OrderWrapper>
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(NewOrderView);

const HeadlineWrapper = styled(defaultFlex)`
  align-items: center;
`;

const BottomButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);
`;

const GetDirectionButton = styled(defaultFlex)`
  height: 45px;
  background: #00adf6;
  border-radius: 6px;
`;

const CancelOrderButton = styled(defaultFlex)`
  margin-top: 15px;
`;

const GetDirectionText = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.5px;
  text-transform: capitalize;

  color: #ffffff;
`;

const CancelOrderText = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  color: #00adf6;
`;

const StepperLabel = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  margin-left: 16px;
`;

const OrderLabel = styled(CommonP)`
  font-family: NationalRegular;
  font-size: 16px;
  line-height: 24px;
  color: #797979;
`;

const OrderText = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 26px;
  line-height: 30px;
  color: #00476e;
`;

const PickupText = styled(OrderText)`
  color: #00ba89;
`;

const OrderIdColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const OrderIdText = styled.p`
  font-family: PlatformRegular;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 24px;
  color: #444444;
`;

const OrderStepupWrapper = styled(flexColumnDiv)`
  align-items: flex-start;
  margin-top: 40px;
`;

const PickupDetailsColumn = styled(OrderIdColumn)`
  justify-content: center;
  align-items: flex-end;
`;

const OrderDetailsWrapper = styled.div`
  margin-top: 20px;
`;

const NavbarWrapper = styled.div`
  margin: 0 -15px;
`;

const OrderWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const OrderBody = styled.div`
  margin-top: 30px;
`;

const StepperRow = styled(defaultFlex)``;

const StepperSpan = styled.span`
  height: 55px;
  border-left: 5px dotted #e1e1e1;
  margin: 5px 0 5px 10px;
`;

const SpanContainer = styled(defaultFlex)`
  align-items: flex-start;
`;

const MinorOrderText = styled(CommonP)`
  font-family: NationalRegular;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #797979;
  margin-left: ${(props) => (props.last ? "42px" : "26px")};
`;
const CustomDiv = styled(defaultFlex)`
  width: 25px;
  height: 25px;
  background: rgba(0, 186, 137, 0.2);
  border-radius: 50%;
  position: relative;
`;

const AltWrapper = styled(CustomDiv)`
  background: rgba(0, 186, 137, 0.1);
`;

const InnerDiv = styled.div`
  width: 15px;
  height: 15px;
  background: #00ba89;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;
