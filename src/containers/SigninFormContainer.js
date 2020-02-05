import { connect } from "react-redux";
import SigninForm from "../components/SigninForm/SigninForm";
import Axios from "axios";
import { setToken, startLoading, endLoading, getError } from "../actions";

export default connect(
  state => ({
    loading: state.loading,
    error: state.error
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
        dispatch(endLoading());
        throw error.response.data.error;
      }
    }
  })
)(SigninForm);
