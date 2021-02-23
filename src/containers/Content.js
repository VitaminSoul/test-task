import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Content from "../components/contentComponents/Content";
import * as actions from "../actions/app";
import _ from "lodash";

const productSearch = (data, query) => {
  const found = data.find(
    (i) => i.productName === query || i.id === Number(query)
  );
  return found ? [found] : found;
};

const mapStateToProps = ({
  appReducer: { data, isReady, searchBy, filteredBy, currentPage },
}) => {
  // console.log("sorted by", filteredBy, _.sortBy(data, filteredBy));
  return {
    data: _.sortBy(productSearch(data, searchBy) || data, (i) => i[filteredBy]),
    isReady,
    currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
