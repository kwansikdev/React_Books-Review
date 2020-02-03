import React from "react";
import { Link } from "react-router-dom";

import { Button, Layout } from "antd";
import { useState } from "react";
import InputModal from "./InputModal";

const Nav = ({ token, logout, history, visible, setVisible }) => {
  const { Header } = Layout;

  const showModal = () => {
    if (!token) return;
    setVisible(true);
  };

  return (
    <>
      <Header className="header">
        <h1 style={{ float: "left" }}>
          <Link to="/">
            <p>HOME</p>
          </Link>
        </h1>
        <Button type="primary" onClick={showModal}>
          Book Add
        </Button>
        {token ? (
          <Button onClick={logout}>로그아웃</Button>
        ) : (
          <Button>
            <Link to="/signin">로그인</Link>
          </Button>
        )}
      </Header>
      {visible && (
        <InputModal
          token={token}
          visible={visible}
          setVisible={setVisible}
          history={history}
        />
      )}
    </>
  );
};

export default Nav;
