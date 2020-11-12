const URL = "https://bdbusticket.firebaseio.com/buses/"
export const getDatas = (id) => {
  return async (dispatch) => {
    const res = await fetch(URL+id+".json");
    const data = await res.json();
    dispatch({
      type: "GET_DATAS",
      payload: {
        datas: data,
      },
    });
  };
};
export const addTitle = (title) => ({
  type: "ADD_TITLE",
  payload: {
    title: title,
  },
});