import React from "react";
import styled from "styled-components";

const EmptyDefaultButton = (props) => {
  return (
    <ButtonWrapper
      width={props.width}
      height={props.height}
      onClick={() => props.onClick()}
    >
      <ButtonP>{props.text}</ButtonP>
    </ButtonWrapper>
  );
};

export default EmptyDefaultButton;

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
  color: #00adf6;
`;

const ButtonWrapper = styled(defaultFlex)`
  border-color: #00adf6;
  border-style: solid;
  border-width: 1px;
  width: ${(props) => props.width}px;
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
  color: #00adf6;
  border-radius: 6px;
`;
