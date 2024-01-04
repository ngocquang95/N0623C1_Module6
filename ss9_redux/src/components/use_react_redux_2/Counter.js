import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../use_react_redux/actions/counter";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  
  return (
    <>
      {/* <h1>{store.getState().todo}</h1> */}
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(decrement(2))}
        className="btn btn-danger mx-2"
      >
        - 2
      </button>
      <button onClick={() => dispatch(increment(5))} className="btn btn-primary">
        + 5
      </button>
    </>
  );
}

export default Counter;
