import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CommentsComponent from "../components/contentComponents/cardComponents/CommentsComponent/CommentsComponent";

const mapStateToProps = ({ appReducer: { commentsData } }) => {
  return {
    commentsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsComponent);
