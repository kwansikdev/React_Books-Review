import { connect } from "react-redux";
import Books from "../components/Books";
import { setBooksThunk, removeBooksThunk } from "../actions";

export default connect(
  state => ({
    token: state.token,
    books: state.books
  }),
  dispatch => ({
    setBooks: async token => {
      dispatch(setBooksThunk(token));
    },
    removeBook: async (token, id) => {
      dispatch(removeBooksThunk(token, id));
    }
  })
)(Books);
