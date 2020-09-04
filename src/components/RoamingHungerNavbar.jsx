//@flow
import React from "react";
import styled from "styled-components";

type Props = {
  leftIcon?: any,
  rightIcon?: any,
};

const RoamingHungerNavbar = (props: Props) => {
  return (
    <NavWrapper className="row justify-content-between align-items-center m-0">
      {props.leftIcon ? (
        <LeftWrapper>{props.leftIcon}</LeftWrapper>
      ) : (
        <LeftWrapper>
          <div />
        </LeftWrapper>
      )}
      <Image src="/img/logo2.svg" alt="Organizer logo" />

      {props.rightIcon ? (
        <RightWrapper>{props.rightIcon}</RightWrapper>
      ) : (
        <RightWrapper>
          <div />
        </RightWrapper>
      )}
    </NavWrapper>
  );
};

export default RoamingHungerNavbar;

const NavWrapper = styled.div`
  background: #00aced;
  width: 100%;
`;

const LeftWrapper = styled.div`
  margin-left: 26px;
`;

const RightWrapper = styled.div`
  margin-right: 26px;
`;

const Image = styled.img`
  height: 60px;
`;
