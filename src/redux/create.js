import { createStore, applyMiddleware } from "redux";
import reducers from "./modules/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default function create() {
  const token = localStorage.getItem("token");

  const store = createStore(
    reducers,
    {
      auth: {
        token,
        loading: false,
        error: null
      }
    },
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}
