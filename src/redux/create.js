import { createStore, applyMiddleware } from "redux";
import reducer from "./modules/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const create = () => {
  const token = localStorage.getItem("token");

  const store = createStore(
    reducer,
    {
      books: [],
      auth: {
        token,
        loading: false,
        error: null
      }
    },
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default create;
