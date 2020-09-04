// @flow
import React from "react";
import {useSelector} from "react-redux";
import type {Cart, Event, Stall} from "../../model/dataModel";
import {CommonP, defaultFlex} from "../../styles/CommonStyles";
import {FiChevronLeft, FiShoppingCart} from "react-icons/fi";
import {IoMdStopwatch} from "react-icons/io";
import {IconContext} from "react-icons";
import styled from "styled-components";
import {CalculateCartLength} from "../../util";

const CheckoutNav = (props: any) => {
  const cart: Cart = useSelector((state) => state.shoppingCart);
  const eventState: Event = useSelector((state) => state.sleekEventState);
  const stall: Stall = useSelector((state) => state.sleekStallState);

  const MiddleIcon = () => {
    if (props.currPage === "StallView") {
      return <Image src={props.iconSrc} alt="Trending item" />;
    }
    return (
      <TimeWrapper className="">
        <IconContext.Provider
          value={{
            color: "#FFFFFF",
            className: "global-class-name",
            size: "20px",
          }}
        >
          <IoMdStopwatch />
        </IconContext.Provider>
        <WaitingText>
          {" "}
          {props.currPage === "DemoPayment" ? 45 : cart.requestedEta} mins
        </WaitingText>
      </TimeWrapper>
    );
  };

  return (
    <CheckoutNavContainer className="" page={props.currPage}>
      <IconRow
        className="row m-0 justify-content-center
       align-items-center"
      >
        <BackWrapper className="">
          <IconContext.Provider
            value={{
              color: "#FFFFFF",
              className: "global-class-name",
              size: "24px",
            }}
          >
            {props.currPage === "StallView" && eventState && eventState._id ? (
              <FiChevronLeft
                onClick={() => props.history.push(`/event/${eventState._id}`)}
              />
            ) : (
              ""
            )}
            {props.currPage === "EnterPhone" && (
              <FiChevronLeft
                onClick={() => props.history.push(`/stall/${stall._id}`)}
              />
            )}
            {props.currPage === "PaymentMethod" && (
              <FiChevronLeft
                onClick={() => props.history.push(`/enter_phone`)}
              />
            )}
            {!props.currPage && (
              <FiChevronLeft onClick={() => props.history.goBack()} />
            )}
          </IconContext.Provider>
        </BackWrapper>

        {MiddleIcon()}
      </IconRow>
    </CheckoutNavContainer>
  );
};

export default CheckoutNav;

const CartNumberWrapper = styled(defaultFlex)`
  position: absolute;
  padding: 5px;
  border-radius: 50%;
  background: rgb(220, 20, 60);
  width: 14px;
  height: 14px;
  right: -7px;
`;

const CartNumber = styled(CommonP)`
  font-family: NationalBold;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
`;

const WaitingText = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const CheckoutNavContainer = styled.div`
  height: 60px;
  background: ${(props) =>
    props.page === "DemoPayment" ? "#8A4CF6" : "#00aced"};
  box-shadow: inset 0px -0.5px 0px rgba(104, 104, 104, 0.2);
  padding: 0;
  margin: 0 -20px;
`;

const TimeWrapper = styled(defaultFlex)`
  height: 40px;
  width: 124px;
  background: #00476e;
  border-radius: 20px;
`;

const IconRow = styled.div`
  height: 100%;
  padding: 0 25px;
`;

const BackWrapper = styled.div`
  cursor: pointer;
`;

const CartIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const Image = styled.img`
  height: 60px;
`;
