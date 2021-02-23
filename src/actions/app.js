import API from "../API";

export function fetchData(page) {
  return (dispatch) => {
    const api = new API();
    dispatch({ type: "DATA_IS_FETCHING" });
    api.getData(page).then((data) => {
      dispatch({ type: "SET_DATA", payload: data });
    });
  };
}

export const setPage = (pageId) => (dispatch) => {
  const api = new API();
  dispatch({ type: "DATA_IS_FETCHING" });
  api.getData(pageId).then((data) => {
    dispatch({ type: "SET_DATA", payload: data });
  });
  dispatch({
    type: "SET_PAGE",
    payload: pageId,
  });
};

export const setFilter = (filter) => {
  return {
    type: "FILTER_BY",
    payload: filter,
  };
};
