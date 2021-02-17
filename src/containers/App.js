import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import App from "../components/App";
import { setDataThunk } from "../actions/app";

const mapStateToProps = ({ appReducer: { data, isReady } }) => {
  return {
    data,
    isReady,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDataThunk: () => dispatch(setDataThunk()),
  };
};

// const data = [
//   { id: 1, productName: "Lorem1", productDescription: "ipsum1", productImage: null, imageRdy: false },
//   { id: 2, productName: "Lorem2", productDescription: "ipsum2", productImage: null, imageRdy: false },
//   { id: 3, productName: "Lorem3", productDescription: "ipsum3", productImage: null, imageRdy: false },
//   { id: 4, productName: "Lorem4", productDescription: "ipsum4", productImage: null, imageRdy: false },
//   { id: 5, productName: "Lorem5", productDescription: "ipsum5", productImage: null, imageRdy: false },
//   { id: 6, productName: "Lorem6", productDescription: "ipsum6", productImage: null, imageRdy: false },
//   { id: 7, productName: "Lorem7", productDescription: "ipsum7", productImage: null, imageRdy: false },
//   { id: 8, productName: "Lorem8", productDescription: "ipsum8", productImage: null, imageRdy: false },
//   { id: 9, productName: "Lorem9", productDescription: "ipsum9", productImage: null, imageRdy: false },
//   { id: 10, productName: "Lorem10", productDescription: "ipsum10", productImage: null, imageRdy: false },
//   { id: 11, productName: "Lorem11", productDescription: "ipsum11", productImage: null, imageRdy: false },
//   { id: 12, productName: "Lorem12", productDescription: "ipsum12", productImage: null, imageRdy: false },
//   { id: 13, productName: "Lorem13", productDescription: "ipsum13", productImage: null, imageRdy: false },
//   { id: 14, productName: "Lorem14", productDescription: "ipsum14", productImage: null, imageRdy: false },
//   { id: 15, productName: "Lorem15", productDescription: "ipsum15", productImage: null, imageRdy: false },
//   { id: 16, productName: "Lorem16", productDescription: "ipsum16", productImage: null, imageRdy: false }
// ]

export default connect(mapStateToProps, mapDispatchToProps)(App);
