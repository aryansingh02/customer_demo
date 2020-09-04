// @flow
import React from "react";
import {useSelector} from "react-redux";
import type {Order} from "../../model/dataModel";
import get from "lodash/get";
import {FaCheck} from "react-icons/fa";
import {IconContext} from "react-icons";
import styled from "styled-components";
import {
  CheckoutHeadline,
  CheckoutText,
  CommonP,
  defaultFlex,
} from "../../styles/CommonStyles.js";
import ActionButton from "./ActionButton";
import {FormatDateTime, GenerateCurrenyNumber} from "../../util";

const PaymentConfirmation = (props: any) => {
  // console.log("payment confirmation", props);
  // const orderId = get(props, "match.params.id");
  // const orders: Array<Order> = useSelector((state) => state.userInfo.orders);
  // const order: Order | void = orders.find(
  //   (order) => order._id === get(props, "match.params.id")
  // );
  // console.log("order", order);

  return (
    <Wrapper className="container">
      <ConfirmationNav />
      <IconWrapper>
        <IconContext.Provider
          value={{
            color: "#00BA89",
            className: "global-class-name",
            size: "24px",
          }}
        >
          <FaCheck />
        </IconContext.Provider>
      </IconWrapper>
      <TextStylingWrapper>
        <CheckoutHeadline>Thank You</CheckoutHeadline>
        <CheckoutText>
          Your transaction was successful. You'll receive a message to track
          your order.
        </CheckoutText>
      </TextStylingWrapper>
      <ActionButtonWrapper>
        <ActionButton
          text="Track Your Order"
          page={"demo"}
          onClickCallback={() => props.history.push("/waitlist")}
        />
      </ActionButtonWrapper>
    </Wrapper>
  );
};

export default PaymentConfirmation;

const CommonLabel = styled(CommonP)`
  font-family: NationalBold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #141618;
`;

const CommonText = styled(CommonP)`
  font-family: NationalRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const CommonRowWrapper = styled.div`
  padding: 0 20px;
  margin: 0 0 15px 0;
`;

const PaymentMethodWrapper = styled(CommonRowWrapper)``;

const TotalPaidWrapper = styled(CommonRowWrapper)``;

const DateTimeWrapper = styled(CommonRowWrapper)``;

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

const OrderIdWrapper = styled(defaultFlex)`
  margin-top: 30px;
`;

const OrderDetailsWrapper = styled.div`
  background: rgba(0, 173, 246, 0.05);
  border-radius: 8px;
  padding: 25px 0 25px 10px;
  margin-top: 10px;
`;

const OrderId = styled(CommonP)`
  font-family: PlatformBold;
  font-style: normal;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
  color: #00476e;
  white-space: pre-line;
`;

const IconWrapper = styled(defaultFlex)`
  width: 64px;
  height: 64px;
  margin: auto;
  margin-top: 50px;
  border-radius: 50%;
  background: rgba(0, 186, 137, 0.1);
`;

const ActionButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 30px);
`;

const ConfirmationNav = styled(defaultFlex)`
  background: #8a4cf6;
  height: 60px;
  box-shadow: inset 0px -0.5px 0px rgba(104, 104, 104, 0.2);
  margin: 0 -15px;
`;

const TextStylingWrapper = styled.div`
  margin-top: 20px;
  padding: 0 10px;
`;
