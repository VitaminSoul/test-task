import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Content from "../components/contentComponents/Content";
import { setDataThunk, setFilter } from "../actions/app";
import _ from "lodash";

// const productSearch = (arr, query) => {
//   return arr.filter((i) => i.id === Number(query));
// };

// const sortedBy = (data, filter) => {
//   switch (filter) {
//     case "all":
//       return data;
//     case "reversedByAlphabet":
//       return _.sortBy(data, (i) => i.productName).reverse();
//     default:
//       console.log(
//         _.sortBy(data, (o) => {
//           return o[filter];
//         })
//       );
//       return _.sortBy(data, (i) => i[filter]);
//   }
// };

const mapStateToProps = ({
  appReducer: { data, isReady, filteredBy, searchBy },
}) => {
  return {
    data,
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
