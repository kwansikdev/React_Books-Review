import BookService from "../../services/BookService";

// action types
const PENDING = "books-review/books/PENDING";
const SUCCESS = "books-review/books/SUCCESS";
const FAIL = "books-review/books/FAIL";

// initial state
const initialState = {
  books: [],
  loading: false,
  error: null
};

// action creator function
const pending = () => ({ type: PENDING });
const success = books => ({ type: SUCCESS, books });
const fail = error => ({ type: FAIL, error });

// reducers
const books = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return {
        books: [],
        loading: true,
        error: null
      };
    case SUCCESS:
      return {
        books: [...action.books],
        loading: false,
        error: null
      };
    case FAIL:
      return {
        books: [],
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default books;

// thunk
export const getBooks = token => async dispatch => {
  try {
    dispatch(pending());
    const res = await BookService.getBooks(token);
    dispatch(success(res.data));
  } catch (error) {
    dispatch(fail(error));
  }
};

export const deleteBook = (token, id) => async dispatch => {
  try {
    await BookService.deleteBook(token, id);
  } catch (error) {
    dispatch(fail(error));
  }
};
