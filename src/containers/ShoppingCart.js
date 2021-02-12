import { connect }from 'react-redux';
import { bindActionCreators } from 'redux';

import ShoppingCart from '../components/menuComponents/shoppingCartComponents/ShoppingCart';
import * as actions from '../actions/shoppingCart';

  const mapStateToProps = ({ cartReducer: { cartItems }, appReducer: { data, imgData } }) => {
  return {
    cartItems,
    data,
    imgData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);