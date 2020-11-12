const defaultState = {
  datas: [],
  title: "",
};

const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_DATAS":
      let data = Object.keys(action.payload.datas).map(
        (key) => action.payload.datas[key]
      );
      return { ...state, datas: data };
    case "ADD_TITLE":
      return { ...state, title: action.payload.title };
    default:
      return state;
  }
};

export default dataReducer;
