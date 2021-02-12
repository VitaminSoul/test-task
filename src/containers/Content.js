import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Content from "../components/contentComponents/Content";
import { setDataThunk } from "../actions/app";
import _ from "lodash";
// .name.toLowerCase().indexOf(query.toLowerCase()) >= 0

const productSearch = (arr, query) => {
  return arr.filter((i) => i.id === Number(query));
};

const sortedBy = (data, filter) => {
  switch (filter) {
    case "all":
      return data;
    case "reversedByAlphabet":
      return _.sortBy(data, (i) => i.productName).reverse();
    default:
      console.log(
        _.sortBy(data, (o) => {
          return o[filter];
        })
      );
      return _.sortBy(data, (i) => i[filter]);
  }
};

// const filtred = sortedBy(productSearch(data, searchBy), filteredBy)

//   if (filtred.length) {
//     return {
//       data: filtred,
//       isReady
//     }
//   }
//   else {
//     data = sortedBy(data, filteredBy)

//   }

const mapStateToProps = ({
  appReducer: { data, isReady, filteredBy, searchBy },
}) => {
  return {
    data: sortedBy(data, filteredBy),
    isReady,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDataThunk: () => dispatch(setDataThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);