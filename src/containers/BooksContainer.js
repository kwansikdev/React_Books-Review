import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Books from "../components/Books";
import { deleteBook, getBooks as getBooksAction } from "../redux/modules/books";
import { useCallback } from "react";

// connect
// export default connect(
//   state => ({
//     token: state.auth.token,
//     books: state.books.books,
//     loading: state.books.loading,
//     error: state.books.error
//   }),
//   dispatch => ({
//     getBooks: async token => {
//       dispatch(getBooks(token));
//     },
//     deleteBook: async (token, id) => {
//       dispatch(deleteBook(token, id));
//     }
//   })
// )(Books);

// connect with Hooks

const BooksContainer = props => {
  // state
  const { books, loading, error } = useSelector(state => state.books);

  // dispatch
  const dispatch = useDispatch();
  const getBooks = useCallback(
    async token => {
      dispatch(getBooksAction());
    },
    [dispatch]
  );

  return (
    <>
      <Books
        {...props}
        books={books}
        loading={loading}
        error={error}
        getBooks={getBooks}
      />
    </>
  );
};

export default BooksContainer;
