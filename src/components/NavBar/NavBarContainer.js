import { connect } from "react-redux";
import NavBar from "./NavBar";
import {logout } from "../../actions/navbarActions";

function mapStateToProps({ isAdmin }) {
  return {
    isAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);