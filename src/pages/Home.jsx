import React, { useState, useEffect, useCallback, createRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import { Button, Input } from "antd";
import { TiHomeOutline } from "react-icons/ti";
import { FaSistrix, FaEraser, FaRegTrashAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const StyledHeader = styled.header`
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
    z-index: 1;
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

  const opneAddBook = () => {
    setStatus(!status);
  };

  const closeAddBook = () => {
    setStatus(false);
  };

  //
  const authorRef = createRef();
  const titleRef = createRef();
  const urlRef = createRef();
  const messageRef = createRef();

  const addBook = useCallback(async () => {
    const author = authorRef.current.state.value;
    const title = titleRef.current.state.value;
    const url = urlRef.current.state.value;
    const message = messageRef.current.state.value;

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
      setStatus(false);
    } catch (error) {}
  }, [authorRef, messageRef, titleRef, token, urlRef]);

  useEffect(() => {
    getBooksList();
  }, [addBook, getBooksList]);

  return (
    <>
      <StyledHeader>
        <div>
          <Button>
            <Link to="/">
              <TiHomeOutline />
            </Link>
          </Button>
          <Button onClick={opneAddBook}>
            {/* <Link to="/addbook">책 추가</Link> */}책 추가
          </Button>
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
      </StyledHeader>
      <h1>HOME</h1>
      <div>
        <Section>
          {status ? (
            <div className="add-book-modal">
              <Button onClick={closeAddBook}>
                <IoMdCloseCircleOutline />
              </Button>
              <label htmlFor="author">
                저자:
                <Input id="author" placeholder="" ref={authorRef} />
              </label>
              <label htmlFor="title">
                제목:
                <Input id="title" placeholder="" ref={titleRef} />
              </label>
              <label htmlFor="message">
                메세지:
                <Input id="message" placeholder="" ref={messageRef} />
              </label>
              <label htmlFor="url">
                url:
                <Input id="url" placeholder="" ref={urlRef} />
              </label>
              <Button onClick={addBook}>ADD</Button>
            </div>
          ) : null}
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
