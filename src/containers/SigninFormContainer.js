import { connect } from "react-redux";
import SigninForm from "../components/SigninForm/SigninForm";
import Axios from "axios";
import { setToken } from "../actions/token";
import { startLoading, endLoading } from "../actions/loading";
import { getError, removeError } from "../actions/error";

export default connect(
  state => ({
    loading: state.loading,
    loginError: state.error
  }),
  dispatch => ({
    login: async (email, password) => {
      try {
        //
        dispatch(startLoading());
        const response = await Axios.post("https://api.marktube.tv/v1/me", {
          email,
          password
        });
        console.log(response.data);
        const { token } = response.data;
        dispatch(endLoading());
        localStorage.setItem("token", token);
        dispatch(setToken(token));
      } catch (error) {
        dispatch(getError(error.response.data.error));
        console.log("dispatch");
        dispatch(endLoading());
        throw error.response.data.error;
      }
    }
  })
)(SigninForm);
