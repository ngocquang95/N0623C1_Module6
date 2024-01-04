import { useReducer } from "react";

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
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return { ...state, count: state.count + action.payload };
    //   state.count += action.payload;
    //   console.log(state.count);
    //   return {...state};
    case DECREMENT_ACTION:
      return { ...state, count: state.count - action.payload };
    default:
      throw new Error("Invalid action");
  }
};

function Counter() {
  // Bước 4: Sử dụng useReducer với reducer và state ban đầu để tạo ra state và hàm dispatch.
  const [state, dispatch] = useReducer(reducer, initState);

  // Bước 5: Sử dụng hàm dispatch để gửi action đến reducer để cập nhật state.
  return (
    <>
      <h1>{state.todo}</h1>
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch(decrement(2))}
        className="btn btn-danger mx-2"
      >
        - 2
      </button>
      <button
        onClick={() => dispatch(increment(5))}
        className="btn btn-primary"
      >
        + 5
      </button>
    </>
  );
}

export default Counter;
