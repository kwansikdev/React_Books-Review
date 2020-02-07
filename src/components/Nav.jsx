import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Layout } from "antd";
import InputModal from "./InputModal";

const Nav = ({ token, logoutThunk, books, addBookThunk, history }) => {
  const { Header } = Layout;
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    if (!token) return;
    setVisible(true);
  };

  const logout = async () => {
    await logoutThunk(token);
    // history.push('/');
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
          addBookThunk={addBookThunk}
        />
      )}
    </>
  );
};

export default Nav;
