import React, { useEffect } from "react";

import styled from "styled-components";
import { Button } from "antd";
import { FaEraser, FaRegTrashAlt } from "react-icons/fa";

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;

  li {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px 30px 20px 30px;
    border-radius: 3rem;
    outline: none;
    border: none;
    box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
  }
`;

const Books = ({ token, books, setBooks, removeBook }) => {
  useEffect(() => {
    setBooks(token);
  }, [setBooks, token]);

  const click = async id => {
    console.log(id);
    await removeBook(token, id);
  };

  return (
    <>
      {books ? (
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
                <FaRegTrashAlt onClick={() => click(book.bookId)} />
              </Button>
            </li>
          ))}
        </Ul>
      ) : (
        <p> 추가된 책이 없습니다. 책을 추가해주세요</p>
      )}
    </>
  );
};

export default Books;
