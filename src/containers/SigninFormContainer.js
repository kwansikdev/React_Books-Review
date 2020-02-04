import { connect } from "react-redux";
import SigninForm from "../components/SigninForm/SigninForm";
import Axios from "axios";
import { setToken } from "../actions/token";

export default connect(
  state => ({
    loading: state.loading
  }),
  dispatch => ({
    login: async (email, password) => {
      try {
        //
        const response = await Axios.post("https://api.marktube.tv/v1/me", {
          email,
          password
        });
        console.log(response.data);
        const { token } = response.data;
        localStorage.setItem("token", token);
        dispatch(setToken(token));
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  })
)(SigninForm);
