import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import withAuth from "../hocs/withAuth";
import { Button } from "antd";

const StyledHeader = styled.header``;

const Home = () => {
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem("token");

  const getBooksList = useCallback(async () => {
    const response = await axios.get("https://api.marktube.tv/v1/book", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setBooks(response.data);
  }, [token]);

  useEffect(() => {
    getBooksList();
  }, [getBooksList]);

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

      setBooks(books.filter(book => book.bookId !== id));
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
      <h1>HOME</h1>
      <section>
        {books[0] ? (
          <ul>
            {books.map(book => (
              <li key={book.bookId}>
                <p>Book Id: {book.bookId} </p>
                <p>책 제목 : {book.title}</p>
                <p>저자 : {book.author}</p>
                <Button onClick={() => removeBook(book.bookId)}>X</Button>
              </li>
            ))}
          </ul>
        ) : (
          <p> 추가된 책이 없습니다. 책을 추가해주세요</p>
        )}
      </section>
    </>
  );
};

export default Home;
