import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LikeComponent from "../components/contentComponents/cardComponents/LikesComponent/LikesComponent";
import * as actions from '../actions/produtCard';

const mapStateToProps = ({ appReducer: { likesData } }) => {
  return {
    likesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeComponent);
