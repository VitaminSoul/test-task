import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SideBar from '../components/SideBarComponents/SideBar';
import * as actions from '../actions/filter';

const mapStateToProps = ({ appReducer: {price, rating} }) => {
  return {
    price, 
    rating
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);