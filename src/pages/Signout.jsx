import React from "react";
import axios from "axios";

const Signout = props => {
  const token = localStorage.getItem("token");

  axios.delete("https://api.marktube.tv/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  localStorage.removeItem("token");
  props.history.push("/");
  return <div>logout</div>;
};

export default Signout;
