import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";

const StyledInput = styled.div`
  margin-bottom: 20px;
`;

const StyledStar = styled.span`
  color: #c52626;
`;

const StyledLabel = styled.label`
  display: inline-block;
  padding-bottom: 10px;
`;

const StyledEmail = styled(Input).attrs(() => ({
  type: "email",
  id: "email",
  placeholder: "Enter your email"
}))``;

const StyledPassword = styled(Input).attrs(() => ({
  type: "password",
  id: "password",
  placeholder: "Enter your password"
}))``;

const InputButton = styled(Button)`
  width: 100px;
  background: #28546a;
  color: white;
  margin-top: 10px;
  margin-bottom: 20px;
  border-style: none;

  &:hover {
    color: #28546a;
    border: 2px solid #28546a;
  }
`;

const InputArea = props => {
  return (
    <>
      <StyledInput>
        <StyledLabel htmlFor="email">
          Email
          <StyledStar>*</StyledStar>
        </StyledLabel>
        <StyledEmail />
      </StyledInput>
      <StyledInput>
        <StyledLabel htmlFor="password">
          Password
          <StyledStar>*</StyledStar>
        </StyledLabel>
        <StyledPassword />
      </StyledInput>
      <InputButton>SIGN IN</InputButton>
    </>
  );
};

export default InputArea;
