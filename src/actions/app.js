import API from '../API';

export function setDataThunk() {
  return dispatch => {
    const api = new API;
    
    dispatch({ type: 'DATA_IS_FETCHING' });
    api.getData().then( data => {
      console.log(data);
      dispatch({ type: 'SET_DATA', payload: data })
    })
  }
} 