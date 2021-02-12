import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../components/contentComponents/Content';
import { setDataThunk } from '../actions/app';
import _ from 'lodash';

const sortedBy = (data, filter) => {
  if (filter==='all') return data
  else return _.sortBy(data, i => i[filter])
}

const mapStateToProps = ({ appReducer: { data, isReady, filteredBy } }) => {
  console.log("sorted:", )
  return {
    data: sortedBy(data, filteredBy), 
    isReady
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDataThunk: () => dispatch(setDataThunk()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content)