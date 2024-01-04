import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./features/counter/Counter";
// import Counter from "./components/use_react_redux_2/Counter";

function App() {
  return (
    <div className="text-center">
      <Counter />
    </div>
  );
}

export default App;
