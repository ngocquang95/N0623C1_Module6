import { connect } from "react-redux";
import { decrement, increment } from "../../use_react_redux/actions/counter";

function Counter({ count, increment, decrement }) {
  return (
    <>
      {/* <h1>{store.getState().todo}</h1> */}
      <h1>{count}</h1>
      <button
        onClick={decrement}
        className="btn btn-danger mx-2"
      >
        - 2
      </button>
      <button
        onClick={increment}
        className="btn btn-primary"
      >
        + 5
      </button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment(5)),
  decrement: () => dispatch(decrement(2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
