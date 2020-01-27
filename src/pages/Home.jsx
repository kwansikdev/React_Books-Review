import React, { useState, useEffect } from "react";
import withAuth from "../hocs/withAuth";
import axios from "axios";

function Book(props) {
  return <div>title : {props.title}</div>;
}

const Home = ({ token }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res);
        setBooks(res.data);
      });
  }, [token]);

  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
};

export default withAuth(Home);
