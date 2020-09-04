// @flow
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {animated, useSpring} from "react-spring";
import {CommonP} from "../styles/CommonStyles";
import styled from "styled-components";
import {IoMdClose} from "react-icons/all";
import {IconContext} from "react-icons";
import type {Order} from "../model/dataModel";
import get from "lodash/get";

type NavbarProps = {
  eventStateLogo?: string,
  eventStateName?: string,
  currPage: string,
  storeEta?: string,
  storeId: string,
  order?: Order,
  propogateSearchQuery?: any,
  eventId?: string,
  history: any,
};

const Navbar = ({
  eventStateLogo,
  eventStateName,
  currPage,
  storeEta,
  storeId,
  order,
  propogateSearchQuery,
  eventId,
  history,
}: NavbarProps): any => {
  const [enableSearch, setEnableSearch] = useState(false);
  const [aprops, set] = useSpring(() => ({opacity: 0}));

  set({opacity: enableSearch ? 1 : 0});

  const handleSearch = (event) => {
    if (propogateSearchQuery) {
      propogateSearchQuery(event.target.value);
    }
  };

  const handleSearchClose = () => {
    setEnableSearch(false);
    if (propogateSearchQuery) {
      propogateSearchQuery("");
    }
  };

  if (currPage === "EventView") {
    if (enableSearch) {
      return (
        <animated.div style={aprops}>
          <div className="row headerRow align-items-center">
            <div className="col-2">
              <button
                type="button"
                className="btn searchButton rounded-circle"
              />
            </div>
            <div className="col-8 mr-0 pr-0">
              <input
                type="text"
                name="name"
                className="form-control searchQueryBox"
                id="name"
                onChange={handleSearch}
                placeholder="Search..."
              />
            </div>
            <div className="col-2 ml-0 pl-0">
              <button
                type="button"
                className="btn storeTileName searchCross"
                onClick={handleSearchClose}
              >
                X
              </button>
            </div>
          </div>
        </animated.div>
      );
    } else {
      return (
        <div className="row headerRow align-items-center text-center">
          <div className="col-12 text-center">
            <img
              src={eventStateLogo}
              alt={eventStateName}
              className="eventLogo"
              width="175px"
            />
            <button
              type="button"
              className="btn searchButton rounded-circle float-right"
              onClick={() => setEnableSearch(true)}
            />
          </div>
        </div>
      );
    }
  } else if (currPage === "StallView") {
    return (
      <div className="row headerRow align-items-center text-center">
        <div className="col-12 text-left">
          {!!eventId ? (
            <Link to={"/event/" + eventId}>
              <img
                className="backIcon"
                src="/img/back_icon.png"
                height="16px"
                alt="back to the event page"
              />
            </Link>
          ) : (
            <img
              className="backIcon"
              src="/img/back_icon.png"
              height="16px"
              alt="back to the event page"
            />
          )}
          <img src="/img/clock.gif" width="55px" alt="expected wait time"></img>
          <span className="waitTime mr-2"> {storeEta}min </span>
        </div>
      </div>
    );
  } else if (currPage === "CartSummary") {
    return (
      <div className="container-fluid p-0">
        <div className="row align-items-center text-center full-height">
          <div className="col-12 cartSummary">
            <IconWrapper>
              <IconContext.Provider
                value={{
                  color: "#797979",
                  className: "global-class-name",
                  size: "24px",
                }}
              >
                <IoMdClose onClick={() => history.goBack()} />
              </IconContext.Provider>
            </IconWrapper>

            <CartText>Cart</CartText>
            <StyledHr></StyledHr>
          </div>
        </div>
      </div>
    );
  } else if (currPage === "Checkout") {
    return (
      <div className="row headerRow align-items-center text-center">
        <div className="col-12 cartSummary">
          <Link to={"/cartSummary"} className="float-left text-white">
            <img
              src="/img/back_icon.png"
              height="16px"
              alt="back to the store"
            />
          </Link>
          <span>Payment</span>
        </div>
      </div>
    );
  } else if (currPage === "OrderView") {
    return (
      <div className="row headerRow align-items-center text-center">
        <div className="col-12 cartSummary">
          <Link
            to={"/stall/" + get(order, "merchantInfo.storeId", "")}
            className="float-left"
          >
            <img
              src="/img/back_icon.png"
              height="16px"
              alt="back to the event page"
            />
          </Link>
          <span>Order Status</span>
        </div>
      </div>
    );
  }
};

export default Navbar;

const CartText = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 26px;
  line-height: 30px;
`;

const IconWrapper = styled.div`
  position: absolute;
`;

const StyledHr = styled.hr`
  margin: 15px 0 0 0;
`;
