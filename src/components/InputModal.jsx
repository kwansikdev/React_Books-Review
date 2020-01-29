import React, { createRef, useCallback } from "react";
import axios from "axios";

import styled from "styled-components";
import { Button, Input } from "antd";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ModalBg = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: calc(100vh - 135px);
  z-index: 1;
`;

const InputModal = ({ token, setStatus }) => {
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
  }, [authorRef, messageRef, setStatus, titleRef, token, urlRef]);

  const closeAddBook = () => {
    setStatus(false);
  };

  return (
    <>
      <ModalBg></ModalBg>
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
    </>
  );
};

export default InputModal;
