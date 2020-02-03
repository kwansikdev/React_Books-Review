import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Nav from "../components/Nav";
import { Layout, Menu, Icon, Button } from "antd";
import { FaEraser, FaRegTrashAlt } from "react-icons/fa";

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;

  li {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px 30px 20px 30px;
    border-radius: 3rem;
    outline: none;
    border: none;
    box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
    width: 300px;
  }
`;

const Homex = props => {
  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;
  const token = localStorage.getItem("token");

  const [books, setBooks] = useState([]);
  const [visible, setVisible] = useState(false);

  const getBooksList = useCallback(async () => {
    const response = await axios.get("https://api.marktube.tv/v1/book", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setBooks(response.data);
    console.log(response.data);
  }, [token]);

  useEffect(() => {
    getBooksList();
  }, [getBooksList]);

  const logout = () => {
    axios.delete("https://api.marktube.tv/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    props.history.push("/");
    localStorage.removeItem("token");
  };

  const removeBook = async id => {
    try {
      const response = await axios.delete(
        `https://api.marktube.tv/v1/book/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      getBooksList();
    } catch (error) {}
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Nav
        token={token}
        logout={logout}
        history={props.history}
        visible={visible}
        setVisible={setVisible}
      />
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  User
                </span>
              }
            >
              <Menu.Item key="1">List</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280,
              borderRadius: "30px",
              overflowY: "auto"
            }}
          >
            {token ? (
              books[0] ? (
                <Ul>
                  {books.map(book => (
                    <li key={book.bookId}>
                      <p>Book Id: {book.bookId} </p>
                      <p>책 제목 : {book.title}</p>
                      <p>저자 : {book.author}</p>
                      <Button>
                        <FaEraser />
                      </Button>
                      <Button>
                        <FaRegTrashAlt
                          onClick={() => removeBook(book.bookId)}
                        />
                      </Button>
                    </li>
                  ))}
                </Ul>
              ) : (
                <p> 추가된 책이 없습니다. 책을 추가해주세요</p>
              )
            ) : (
              <p>추가한 책 목록을 보기위해서 로그인을 해주시기 바랍니다</p>
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Homex;
