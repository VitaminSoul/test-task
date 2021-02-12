import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/menuComponents/SerchBar';
import * as actions from '../actions/setSearchQuery';


const mapStateToProps = () => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)