import { useReducer } from "react";

// Bước 1: Khởi tạo state ban đầu
const initState = 10;

// Bước 2: Tạo các action
const INCREMENT_ACTION = "INCREMENT";
const DECREMENT_ACTION = "DECREMENT";

// Bước 3: Viết function reducer để xử lý các action và trả về state mới.
const reducer = (state, action) => {
  switch (action) {
    case INCREMENT_ACTION:
      return state + 1;
    case DECREMENT_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

function Counter() {
  // Bước 4: Sử dụng useReducer với reducer và state ban đầu để tạo ra state và hàm dispatch.
  const [counter, dispatch] = useReducer(reducer, initState);

  // Bước 5: Sử dụng hàm dispatch để gửi action đến reducer để cập nhật state.
  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => dispatch(DECREMENT_ACTION)}
        className="btn btn-danger mx-2"
      >
        -
      </button>
      <button
        onClick={() => dispatch(INCREMENT_ACTION)}
        className="btn btn-primary"
      >
        +
      </button>
    </>
  );
}

export default Counter;
