import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import ExpandCollapse from "./components/ExpandCollapse";
import TitleEdit from "./components/TitleEdit";
import LocaltionSelect from "./components/LocaltionSelect";

function App() {
  return (
    <div className="text-center">
      <LocaltionSelect />
    </div>
  );
}

export default App;
