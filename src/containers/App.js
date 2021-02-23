import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import App from "../components/App";
import * as actions from "../actions/app";

const mapStateToProps = ({ appReducer: { data, isReady, currentPage } }) => {
  return {
    data,
    isReady,
    currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
