// @flow
import React from "react";
import {CommonP, defaultFlex} from "../../styles/CommonStyles";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";

type Props = {
  onClickCallback: any,
  disabled?: boolean,
  text: string,
};

const ActionButton = (props: Props) => {
  return (
    <ButtonContainer
      onClick={() => props.onClickCallback()}
      className="container align-items-center align-middle"
      page={props.page}
    >
      <div className="row m-0 p-0 w-100">
        <div className="col-4" align="right">
          {props.disabled ? (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            ""
          )}
        </div>
        <div className="col-8" align="left">
          <TextContent>{props.text}</TextContent>
        </div>
      </div>
    </ButtonContainer>
  );
};

export default ActionButton;

const TextContent = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const ButtonContainer = styled(defaultFlex)`
  background: ${(props) =>
    props.page ? "#8A4CF6" : "#00adf6"};
  border-radius: 6px;
  height: 45px;
  cursor: pointer;
`;
