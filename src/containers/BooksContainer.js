import { connect } from "react-redux";
import Books from "../components/Books";
import { deleteBook, getBooks } from "../redux/modules/books";

export default connect(
  state => ({
    token: state.auth.token,
    books: state.books.books,
    loading: state.books.loading,
    error: state.books.error
  }),
  dispatch => ({
    getBooks: async token => {
      dispatch(getBooks(token));
    },
    deleteBook: async (token, id) => {
      dispatch(deleteBook(token, id));
    }
  })
)(Books);
