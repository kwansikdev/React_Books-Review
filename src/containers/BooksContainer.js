import { connect } from "react-redux";
import Books from "../components/Books";
import { setBooksThunk } from "../actions";

export default connect(
  state => ({
    token: state.token,
    books: state.books
  }),
  dispatch => ({
    setBooks: async token => {
      dispatch(setBooksThunk(token));
    }
  })
)(Books);
