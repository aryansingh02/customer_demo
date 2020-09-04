import React, {Component, useEffect, useRef, useState} from "react";
import styled from "styled-components";
// import orders from "../../wailine_data/sample_orders.json";
import Tile from "./Tile";
import DefaultButton from "../FilledButton";
import style from "./WaitList.module.css";

import {useSelector} from "react-redux";

function MarTop() {
  return (
    <BusinessDiv>
      <BusinessP>Your Business</BusinessP>
    </BusinessDiv>
  );
}

function Nav() {
  return <div className={style.Navbar} />;
}

function ExtractDetails(order) {
  var CustName = order.name || order["fulfillmentInfo"]["customer"]["name"];
  // var Phone = order["fulfillmentInfo"]["customer"]["phone"];
  var ItemCount = 0;
  var i;
  var q;
  for (i = 0; i < order["lineItems"].length; i++) {
    q = parseInt(order["lineItems"][i]["quantity"]);
    ItemCount += q;
  }
  return [CustName, ItemCount];
}

const PeopleCount = (prop) => {
  return (
    <div className={style.PeopleCountDiv}>
      <img
        className={style.PeopleCountImg}
        src={require("./placeholder/users.png")}
      />
      <span className={style.PeopleCountText}> Total people in line </span>
      <span className={style.PeopleCountNum}>{prop.N}</span>
    </div>
  );
};

const Dot = () => {
  return <DotDiv />;
};

const ModifiedOrders = (ords) => {
  if (ords.length > 5) {
    let modArr = [...ords.slice(0, 2)];
    modArr.push(ords[ords.length - 1]);
    modArr.push(ords[ords.length - 2]);
    modArr.push(ords[ords.length - 3]);
    let CumulTime = 0;
    let dotCount = 0;

    return ords.map((order, i) => {
      var li = ExtractDetails(order);
      var CustName = order.name || li[0];
      var ItemCount = parseInt(li[1]);
      var Sno = i + 1;
      CumulTime = ItemCount + CumulTime;
      var Time = 23;

      if (
        i === ords.length - 1 ||
        i === ords.length - 2 ||
        i === 0 ||
        i === 1
      ) {
        return (
          <div className={style.TileWrapper}>
            <Tile
              Sno={Sno}
              CustName={CustName}
              ItemCount={ItemCount}
              Time={Time}
            />
          </div>
        );
      } else if (dotCount < 4) {
        dotCount += 1;
        return <Dot />;
      }
    });
  } else {
    let CumulTime = 0;
    return ords.map((order, i) => {
      var li = ExtractDetails(order);
      var CustName = li[0];
      var ItemCount = parseInt(li[1]);
      var Sno = i + 1;
      CumulTime = ItemCount + CumulTime;
      var Time = 23;
      return (
        <div className={style.TileWrapper}>
          <Tile
            Sno={Sno}
            CustName={CustName}
            ItemCount={ItemCount}
            Time={Time}
          />
        </div>
      );
    });
  }
};

const WaitList = (props) => {
  const stall: Stall = useSelector((state) => state.sleekStallState);
  const orders = useSelector((state) => state.userDemoState.orders);
  let ButtonText = "Hold Spot Number " + (orders.length + 1).toString();
  const [navWidth, setNavWidth] = useState(0);

  const navRef = useRef(null);

  useEffect(() => {
    if (navRef) {
      setNavWidth(Math.min(navRef.current.offsetWidth, 600));
    }
  });

  const handleclick = () => {
    props.history.push("/waitlist/FillDetails");
  };
  return [
    <div ref={navRef}>
      <Nav />,
    </div>,
    <MarTop />,
    <OrdersWrapper>{ModifiedOrders(orders)}</OrdersWrapper>,
    <PeopleCount N={orders.length} />,
    <div style={{padding: "20px"}}>
      <DefaultButton
        width={navWidth - 40}
        height={45}
        text={ButtonText}
        onClick={handleclick}
        color={"#8300E9"}
      />
    </div>,
  ];
};

export default WaitList;

const DotDiv = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #888888;
  margin: 5px 0;
`;

const BusinessP = styled.p`
  margin: 0;
  padding: 0;
  color: #000000;
  font-family: NationalBold;
  font-size: 28px;
`;

const BusinessDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const OrdersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
