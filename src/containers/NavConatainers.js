import { connect } from "react-redux";

import Nav from "../components/Nav";
import { logout } from "../redux/modules/auth";

export default connect(
  state => ({
    token: state.auth.token,
    books: state.books.books
  }),
  dispatch => ({
    logout: token => {
      dispatch(logout(token));
    }
  })
)(Nav);
