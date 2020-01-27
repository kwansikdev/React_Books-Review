import React from "react";
import styled from "styled-components";
import { Col } from "antd";

const StyledCol = styled(Col).attrs(() => ({
  span: 12
}))``;

const StyledImg = styled.img`
  width: 100%;
`;

const SigninBg = props => {
  return (
    <StyledCol>
      <StyledImg src="/bg_signin.png" alt="Signin" />
    </StyledCol>
  );
};

export default SigninBg;
