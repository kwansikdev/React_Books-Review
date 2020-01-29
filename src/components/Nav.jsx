import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import { TiHomeOutline } from "react-icons/ti";
import { Button } from "antd";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 70px;
  /* padding: 0 25px; */

  div {
    display: inline-block;
    text-align: center;
    height: 70px;
    padding: 10px 0;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }

  button {
    background: #28546a;
    color: white;
    margin-top: 10px;
    margin-bottom: 20px;
    border-style: none;
    font-weight: 500;
    border: 2px solid white;

    &:hover {
      color: #28546a;
      border: 2px solid #28546a;
    }
  }
`;

const Nav = ({ token, setStatus, status }) => {
  const openAddBook = () => {
    return token ? setStatus(!status) : <Link to="/signin" />;
  };

  return (
    <Header>
      <div>
        <Button>
          <Link to="/">
            <TiHomeOutline />
          </Link>
        </Button>
        <Button onClick={openAddBook}>책 추가</Button>
      </div>
      <div>
        <h1>BOOKS' REVIEW</h1>
      </div>
      <div>
        {token ? (
          <Button>
            <Link to="/signout">로그아웃</Link>
          </Button>
        ) : (
          <Button>
            <Link to="/signin">로그인</Link>
          </Button>
        )}
      </div>
    </Header>
  );
};

export default Nav;
