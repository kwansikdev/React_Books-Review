import React, { useState, createRef } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

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

const InputArea = props => {
  const [loading, setLoading] = useState(false);
  const emailInput = createRef();
  const passwordInput = createRef();

  const click = async () => {
    const email = emailInput.current.state.value;
    const password = passwordInput.current.state.value;

    try {
      setLoading(true);
      const response = await axios.post("https://api.marktube.tv/v1/me", {
        email,
        password
      });
      console.log(response);
      setLoading(false);
      props.history.push("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      message.error(error.response.data.error);
    }
  };

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
      <InputButton loading={loading} onClick={click}>
        SIGN IN
      </InputButton>
    </>
  );
};

export default withRouter(InputArea);
