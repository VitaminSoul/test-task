import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Content from "../components/contentComponents/Content";
import { setDataThunk, setFilter } from "../actions/app";
import _ from "lodash";

const productSearch = (data, query) => {
  const found = data.find(
    (i) => i.productName === query || i.id === Number(query)
  );
  return found ? [found] : found;
};

// const sortBy = (data, sortKey) => {
//   return ;
// };

// const sortedBy = (data, filter) => {
//   switch (filter) {
//     case "all":
//       return data;
//     case "reversedByAlphabet":
//       return _.sortBy(data, (i) => i.productName).reverse();
//     default:
//       console.log()
//       );
//       return _.sortBy(data, (i) => i[filter]);
//   }
// };

const mapStateToProps = ({
  appReducer: { data, isReady, searchBy, filteredBy },
}) => {
  console.log("sorted by", filteredBy, _.sortBy(data, filteredBy));
  return {
    data: _.sortBy(productSearch(data, searchBy) || data, (i) => i[filteredBy]),
    isReady,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDataThunk: () => dispatch(setDataThunk()),
    setFilter: () => dispatch(setFilter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
