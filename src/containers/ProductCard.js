import { connect }from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductCard from '../components/contentComponents/cardComponents/PropductCard';
import * as actions from '../actions/produtCard';


const mapStateToProps = ({ appReducer: { data, imgData }, cartReducer: { cartItems }}) => {
  return {
    data,
    imgData,
    cartItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);