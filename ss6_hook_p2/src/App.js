import { useCallback, useContext } from "react";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

// function App() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <>
//       <div>
//         <button
//           className={`btn ${
//             theme === "light" ? "bg-light" : "bg-dark text-white"
//           }`}
//           onClick={toggleTheme}
//         >
//           {theme}
//         </button>
//         <Component1 />
//       </div>
//     </>
//   );
// }

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const hello = useCallback(() => {
    console.log("hello");
  }, []);

  return (
    <>
      <Todos todos={todos} hello={hello} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;
