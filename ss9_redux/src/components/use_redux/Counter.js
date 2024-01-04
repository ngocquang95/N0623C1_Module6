import { useEffect, useReducer, useState } from "react";
import { createStore } from "redux";

// Bước 1: Khởi tạo state ban đầu
const initState = {
  count: 10,
  todo: "Học lập trình",
};

// Bước 2: Tạo các action

// constance
const INCREMENT_ACTION = "INCREMENT";
const DECREMENT_ACTION = "DECREMENT";

// action
const increment = (payload) => ({
  type: INCREMENT_ACTION,
  payload,
});

const decrement = (payload) => ({ type: DECREMENT_ACTION, payload });

// Bước 3: Viết function reducer để xử lý các action và trả về state mới.
const reducer = (state = initState, action) => {
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

const store = createStore(reducer);

function Counter() {
  const [count, setCount] = useState(initState.count);

  useEffect(() => {
    store.subscribe(() => {
      // console.log(store.getState());
      setCount(store.getState().count);
    });
  }, []); // Chạy 1 lần duy nhất

  return (
    <>
      {/* <h1>{store.getState().todo}</h1> */}
      <h1>{count}</h1>
      <button
        onClick={() => store.dispatch(decrement(2))}
        className="btn btn-danger mx-2"
      >
        - 2
      </button>
      <button
        onClick={() => store.dispatch(increment(5))}
        className="btn btn-primary"
      >
        + 5
      </button>
    </>
  );
}

export default Counter;
