import React, {useState, useRef, useEffect, Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import style from "./Form.module.css";
import DefaultButton from "../FilledButton";
import EmptyDefaultButton from "../EmptyButton";
import Nav from "./WaitList.module.css";
import "react-phone-number-input/style.css";
import PhoneInput, {isValidPhoneNumber} from "react-phone-number-input";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setUserPhone} from "../../model/userSlice";
import type {UserInfo} from "../../model/dataModel";
import {IconContext} from "react-icons";
import {FiShoppingCart, IoIosArrowBack} from "react-icons/all";
import {Modal} from "react-bootstrap";
import {CommonP, defaultFlex, flexColumnDiv} from "../../styles/CommonStyles";
import {
  setName,
  setPhone,
  insertBeginning,
  insertEnd,
} from "../../model/userDemoSlice";

const Form = (props) => {
  const userInfo: UserInfo = useSelector((state) => state.userInfo);
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(
    userInfo && userInfo.phoneNumber ? userInfo.phoneNumber : ""
  );
  const navRef = useRef(null);
  const [navWidth, setNavWidth] = useState(0);
  const userDemo = useSelector((state) => state.userDemoState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (navRef) {
      setNavWidth(Math.min(navRef.current.offsetWidth, 600));
    }
  });

  const Nav = () => {
    return (
      <div ref={navRef} className={style.Navbar}>
        <IconContext.Provider
          value={{
            color: "#FFFFFF",
            className: "global-class-name",
            size: "20px",
          }}
        >
          <IoIosArrowBack onClick={() => props.history.goBack()} />
        </IconContext.Provider>
      </div>
    );
  };

  const handleClose = () => {
    console.log("handle close");
    setShowModal(false);
  };

  const createFakeOrder = () => {
    let fakeOrder = {...userDemo.orders[userDemo.orders.length - 1]};
    console.log("fakeorder", fakeOrder);
    fakeOrder.name = userDemo.name;
    fakeOrder.phone = userDemo.phone;
    dispatch(insertEnd(fakeOrder));
    props.history.push("/waitlist");
  };

  const DynamicModal = () => {
    return (
      <Fragment>
        <Modal
          show={showModal}
          // onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="rounded-0"
          onHide={() => handleClose(0, 0)}
        >
          <Modal.Body className="rounded-0">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 text-center">
                  <img
                    src="/img/burger-walking.gif"
                    alt="surge fee"
                    width="200px"
                    className="rounded-circle"
                  />
                </div>
              </div>
              <div className="row">
                <SkipBox className="col-12 dynamicFeeBoxHeader text-center">
                  <HeaderText>Want to skip the line?</HeaderText>
                </SkipBox>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center ">
                <SecondaryText>
                  Skipping the line costs a little extra, but will save you time
                  in a pinch.
                </SecondaryText>
              </div>
            </div>
            {true > 0 && (
              <ButtonsWrapper className="row no-gutters align-items-center">
                <NoThanksContainer className="col-6">
                  <NoThanksButton onClick={() => createFakeOrder()}>
                    <NoThanksText>No, Thanks</NoThanksText>
                  </NoThanksButton>
                  <div className=" etaQuote">
                    <span className="redWaitingDot mr-1" />
                    23 min
                  </div>
                </NoThanksContainer>
                <YesThanksContainer className="col-6">
                  <YesThanksButton
                    onClick={() => props.history.push("/demo_payment")}
                  >
                    <YesThanksText>
                      Yes, skip for <span>2.3 $</span>
                    </YesThanksText>
                  </YesThanksButton>
                  <div className=" etaQuote">
                    <span className="greenWaitingDot mr-1" />5 min
                  </div>
                </YesThanksContainer>
              </ButtonsWrapper>
            )}
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  };

  const routeback = () => {
    props.history.push("/waitlist/");
  };
  const routenext = () => {
    setShowModal(true);
    // props.history.push("/stall/5f3577a8405bae54c65239b6");
  };

  return (
    <>
      <Nav />
      <div>
        <form className={style.root} noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12}>
              <span className={style.heading}> NAME</span>
              <TextField
                id="standard-basic"
                fullWidth
                type={"text"}
                placeholder={"Enter your name"}
                value={userDemo.name}
                onChange={(e) => dispatch(setName({name: e.target.value}))}
                inputProps={{
                  className: style.input,
                }}
                shrink={true}
              />
            </Grid>
            <ModifiedGrid item xs={12}>
              <span className={style.heading}> PHONE</span>
              <PhoneInputModified
                country={"US"}
                placeholder="Enter phone number"
                defaultCountry="US"
                onChange={(phone) => dispatch(setPhone({phone: phone}))}
                className="PhoneInputStyle"
              />
            </ModifiedGrid>
          </Grid>
        </form>
      </div>
      <DynamicModal />
      <div className={style.StickBottom}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {navWidth > 0 && (
              <DefaultButton
                width={navWidth - 40}
                height={45}
                text={"Next"}
                onClick={routenext}
                color={"#8A4CF6"}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Form;

const PhoneInputModified = styled(PhoneInput)`
  font-size: 16px;
  color: #c1c1c1;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
`;

const ModifiedGrid = styled(Grid)`
  margin-top: 20px !important;
`;

const ButtonsWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 15px;
`;

const HeaderText = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #000000;
  margin-top: 30px;
`;

const SecondaryText = styled(CommonP)`
  font-family: NationalRegular;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000 !important;
  margin-top: 10px;
`;

const NoThanksContainer = styled(flexColumnDiv)`
  width: 100%;
  align-items: center;
`;

const YesThanksContainer = styled(NoThanksContainer)`
  width: 100%;
`;

const NoThanksButton = styled(defaultFlex)`
  height: 48px;
  width: calc(100% - 7px);
  margin-right: 7px;
  margin-bottom: 5px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
`;

const NoThanksText = styled(CommonP)`
  font-family: PlatformRegular;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  color: #444444;
`;

const YesThanksButton = styled(NoThanksButton)`
  margin-left: 7px;
  background: #8a4cf6;
`;

const YesThanksText = styled(NoThanksText)`
  color: #ffffff;
`;

const SkipBox = styled.div``;
