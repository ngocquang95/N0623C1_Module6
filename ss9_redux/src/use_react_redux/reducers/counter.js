import { DECREMENT_ACTION, INCREMENT_ACTION } from "../actions/counter";

// Bước 1: Khởi tạo state ban đầu
const initState = {
  count: 10,
  todo: "Học lập trình",
};

// Bước 3: Viết function reducer để xử lý các action và trả về state mới.
const reducerCounter = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return { ...state, count: state.count + action.payload };
    //   state.count += action.payload;
    //   console.log(state.count);
    //   return {...state};
    case DECREMENT_ACTION:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default reducerCounter;
