import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RatingComponent from "../components/contentComponents/cardComponents/RatingComponent/RatingComponent";

const mapStateToProps = ({ appReducer: { ratingData } }) => {
  return {
    ratingData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingComponent);
