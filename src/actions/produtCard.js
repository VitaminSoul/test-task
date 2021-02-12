import API from '../API';

export const addToCart = id => {  
  return {
    type: 'ADD_TO_CART',
    payload: id
  }
}

export const getImg = id => dispatch => {
  const api = new API;
  api.getImg().then(img => {
    dispatch({
      type: 'SET_IMG',
      payload: URL.createObjectURL(img.data),
      id
    })
  })
}
 


