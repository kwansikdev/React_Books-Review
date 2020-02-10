import React, { createRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Input, Button, message } from "antd";

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

const InputArea = ({ history, loading, error, login }) => {
  const emailInput = createRef();
  const passwordInput = createRef();

  const click = async () => {
    const email = emailInput.current.state.value;
    const password = passwordInput.current.state.value;
    try {
      await login(email, password);
      history.push("/");
    } catch (error) {}
  };

  useEffect(() => {
    if (!error) return;

    if (error.response.data.error === "USER_NOT_EXIST") {
      message.error("유저가 없습니다.");
    } else if (error.response.data.error === "PASSWORD_NOT_MATCH") {
      message.error("비밀번호가 틀렸습니다.");
    } else {
      message.error("로그인에 문제가 있습니다.");
    }
  }, [error]);

  return (
    <>
      <StyledInput>
        <StyledLabel htmlFor="email">
          Email
          <StyledStar>*</StyledStar>
        </StyledLabel>
        <StyledEmail ref={emailInput} />
      </StyledInput>
      <StyledInput>
        <StyledLabel htmlFor="password">
          Password
          <StyledStar>*</StyledStar>
        </StyledLabel>
        <StyledPassword ref={passwordInput} />
      </StyledInput>
      <InputButton onClick={click} loading={loading}>
        SIGN IN
      </InputButton>
    </>
  );
};

export default withRouter(InputArea);
