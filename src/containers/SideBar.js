import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SideBar from "../components/SideBarComponents/SideBar";
import * as actions from "../actions/app";

const mapStateToProps = ({
  appReducer: { price, rating, likes, setFilter },
}) => {
  return {
    price,
    rating,
    likes,
    setFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
