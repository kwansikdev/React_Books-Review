import React, { useState, useEffect, useCallback, createRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import { Button, Input } from "antd";

import { FaSistrix, FaEraser, FaRegTrashAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

import Nav from "../components/Nav";
import InputModal from "../components/InputModal";

const Section = styled.section`
  position: relative;

  .add-book-modal {
    background: yellow;
    width: 600px;
    height: 600px;
    border: 2px solid black;
    border-radius: 30px;
    padding: 20px;
    position: fixed;
    z-index: 2;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    /* li {
      margin-bottom: 20px;
      border-radius: 30px;
      padding: 20px;
      border: 1px solid #28546a;

      & + & {
      } */
  }
`;

const Ul = styled.ul`
  /* list-style-type: none;

  li {
    border-radius: 1px solid #28546a;
  } */
`;

const Li = styled.li`
  margin-top: 20px;
  border-radius: 30px;
  padding: 20px;
  border: 1px solid #28546a;
`;

const Home = () => {
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState(false);
  const token = localStorage.getItem("token");

  const getBooksList = useCallback(async () => {
    const response = await axios.get("https://api.marktube.tv/v1/book", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setBooks(response.data);
  }, [token]);

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

  const reviseBook = async id => {
    axios.patch(
      // `https://api.marktube.tv/v1/book/${id}`,
      {
        // title,
        // message,
        // author,
        // url,
      },
      { headers: `Bearer ${token}` }
    );
  };

  useEffect(() => {
    getBooksList();
  }, [getBooksList, status]);

  return (
    <>
      <Nav token={token} status={status} setStatus={setStatus} />
      <h1>HOME</h1>
      <div>
        <Section>
          {status && (
            <InputModal token={token} status={status} setStatus={setStatus} />
          )}
          {token ? (
            books[0] ? (
              <Ul>
                {books.map(book => (
                  <Li key={book.bookId}>
                    <p>Book Id: {book.bookId} </p>
                    <p>책 제목 : {book.title}</p>
                    <p>저자 : {book.author}</p>
                    <Button>
                      <FaEraser onClick={() => reviseBook(book.bookId)} />
                    </Button>
                    <Button onClick={() => removeBook(book.bookId)}>
                      <FaRegTrashAlt />
                    </Button>
                  </Li>
                ))}
              </Ul>
            ) : (
              <p> 추가된 책이 없습니다. 책을 추가해주세요</p>
            )
          ) : (
            <p>추가한 책 목록을 보기위해서 로그인을 해주시기 바랍니다</p>
          )}
        </Section>
      </div>
    </>
  );
};

export default Home;
