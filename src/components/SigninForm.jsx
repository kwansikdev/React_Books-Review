import React from "react";
import styled from "styled-components";
import { Col, Input, Button } from "antd";

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

const InputArea = styled.div`
  margin-bottom: 20px;
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

const StyledUnderline = styled.div`
  height: 1px;
  background-color: #c7c7c7;
  width: 100%;
`;

const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const LinkTitle = styled.p`
  margin: 0;
  vertical-align: middle;
  padding-top: 5px;
  /* line-height: 2; */
`;

const LinkButton = styled(Button)`
  border: 2px solid #28546a;
`;

const SigninForm = props => {
  return (
    <StyledCol>
      <Title>LOG IN. START SEARCHING</Title>
      <InputArea>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledEmail />
      </InputArea>
      <InputArea>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledPassword />
      </InputArea>
      <InputButton>SIGN IN</InputButton>
      <StyledUnderline />
      <LinkArea>
        <LinkTitle>Nedd to create an account? </LinkTitle>
        <LinkButton>SIGN UP</LinkButton>
      </LinkArea>
      <LinkArea>
        <LinkTitle>FORGOT YOUR PASSWORD?</LinkTitle>
        <LinkButton>RECOVERY</LinkButton>
      </LinkArea>
    </StyledCol>
  );
};

export default SigninForm;
