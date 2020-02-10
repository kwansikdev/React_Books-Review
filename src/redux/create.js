import { createStore, applyMiddleware } from "redux";
import reducer from "./modules/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const create = () => {
  const token = localStorage.getItem("token");

  const store = createStore(
    reducer(history),
    {
      books: [],
      auth: {
        token,
        loading: false,
        error: null
      }
    },
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
  );

  return store;
};

export default create;
