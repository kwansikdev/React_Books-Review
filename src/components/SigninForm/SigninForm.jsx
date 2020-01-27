import React from "react";

import styled from "styled-components";
import { Col } from "antd";
import InputArea from "./InputArea";
import LinkArea from "./LinkArea";

const StyledCol = styled(Col).attrs(() => ({
  span: 12
}))`
  padding: 30px;
`;

const Title = styled.h3`
  padding: 20px 0;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-weight: bold;
  margin: 40px 0;
`;

const StyledUnderline = styled.div`
  height: 1px;
  background-color: #c7c7c7;
  width: 100%;
`;

const SigninForm = props => {
  return (
    <StyledCol>
      <Title>LOG IN. START SEARCHING</Title>
      <InputArea />
      <StyledUnderline />
      <LinkArea />
    </StyledCol>
  );
};

export default SigninForm;
