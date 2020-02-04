import React, { createRef, useCallback, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import { Input, Modal } from "antd";

const Label = styled.label`
  margin-bottom: 20px;
`;

const InputModal = ({ token, visible, setVisible, history }) => {
  const authorRef = createRef();
  const titleRef = createRef();
  const messageRef = createRef();
  const urlRef = createRef();

  const addBook = useCallback(async () => {
    const author = authorRef.current.state.value;
    const title = titleRef.current.state.value;
    const message = messageRef.current.state.value;
    const url = urlRef.current.state.value;

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
      setVisible(false);
    } catch (error) {}
  }, [authorRef, titleRef, messageRef, urlRef, token, setVisible]);

  const handleCancel = e => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={addBook}
        onCancel={handleCancel}
      >
        <Label htmlFor="title">
          TITLE
          <Input ref={titleRef} id="title" placeholder="책 제목" />
        </Label>
        <Label htmlFor="author">
          AUTHOR
          <Input ref={authorRef} id="author" placeholder="저자" />
        </Label>
        <Label htmlFor="comment">
          COMMENT
          <Input ref={messageRef} id="comment" placeholder="COMMENT" />
        </Label>
        <Label htmlFor="url">
          URL
          <Input ref={urlRef} id="url" placeholder="URL" />
        </Label>
      </Modal>
    </>
  );
};

export default InputModal;
