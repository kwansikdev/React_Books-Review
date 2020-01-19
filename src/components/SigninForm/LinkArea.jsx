import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const StyledLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const LinkTitle = styled.p`
  margin: 0;
  vertical-align: middle;
  padding-top: 5px;
`;

const LinkButton = styled(Button)`
  border: 2px solid #28546a;
`;

const LinkArea = props => {
  return (
    <>
      <StyledLink>
        <LinkTitle>Nedd to create an account? </LinkTitle>
        <LinkButton>SIGN UP</LinkButton>
      </StyledLink>
      <StyledLink>
        <LinkTitle>FORGOT YOUR PASSWORD?</LinkTitle>
        <LinkButton>RECOVERY</LinkButton>
      </StyledLink>
    </>
  );
};

export default LinkArea;
