import { connect } from "react-redux";

import { logoutThunk, addBookThunk } from "../actions";
import Nav from "../components/Nav";

export default connect(
  state => ({
    token: state.token,
    books: state.books
  }),
  dispatch => ({
    logoutThunk: token => {
      dispatch(logoutThunk(token));
    },
    addBookThunk: (token, title, author) => {
      dispatch(addBookThunk(token, title, author));
    }
  })
)(Nav);
