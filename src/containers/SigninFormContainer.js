import { connect } from "react-redux";
import SigninForm from "../components/SigninForm/SigninForm";
import { loginThunk } from "../actions";

export default connect(
  state => ({
    loading: state.loading,
    error: state.error
  }),
  dispatch => ({
    loginThunk: (email, password) => {
      dispatch(loginThunk(email, password));
    }
  })
)(SigninForm);
