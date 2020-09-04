import React from "react";
import styled from "styled-components";

const DefaultButton = (props) => {
  return (
    <ButtonWrapper
      width={props.width}
      height={props.height}
      onClick={() => props.onClick()}
      color={props.color}
    >
      <ButtonP>{props.text}</ButtonP>
    </ButtonWrapper>
  );
};

export default DefaultButton;

const defaultFlex = styled.div`
  display: flex;
  margin: 5px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonP = styled.p`
  display: inline-block;
  margin: 0;
  font-family: PlatformBold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

const ButtonWrapper = styled(defaultFlex)`
  background: ${(props) => (props.color ? props.color : "#00adf6")};
  width: ${(props) => (props.width <= 560 ? props.width : 560)}px;
  height: ${(props) => props.height}px;
  cursor: pointer;
  justify-content: center;
  margin: 0 auto;
  font-family: PlatformBold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;
  border-radius: 6px;
`;
