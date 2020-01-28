import React, { createRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Input } from "antd";
import withAuth from "../hocs/withAuth";

const StyledHeader = styled.header``;

const AddBook = props => {
  const token = localStorage.getItem("token");
  const authorRef = createRef();
  const titleRef = createRef();

  const addBook = async () => {
    const author = authorRef.current.state.value;
    const title = titleRef.current.state.value;
    try {
      const response = await axios.post(
        "https://api.marktube.tv/v1/book",
        {
          title,
          author
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      props.history.push("/");
    } catch (error) {}
  };

  return (
    <>
      <StyledHeader>
        <button>
          <Link to="/">Home</Link>
        </button>
        {token ? (
          <button>
            <Link to="/signout">로그아웃</Link>
          </button>
        ) : (
          <button>
            <Link to="/signin">로그인</Link>
          </button>
        )}
        <button>
          <Link to="/addbook">책 추가</Link>
        </button>
      </StyledHeader>
      <section>
        <label htmlFor="author">
          저자
          <Input id="author" ref={authorRef} />
        </label>
        <label htmlFor="book-name">
          제목
          <Input id="book-name" ref={titleRef} />
        </label>
        <button onClick={addBook}>ADD</button>
      </section>
    </>
  );
};

export default withAuth(AddBook);
