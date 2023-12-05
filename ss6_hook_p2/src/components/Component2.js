import { useContext } from "react";
import { ThemeContext } from "./Themeprovider";

function Component2() {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>Hello world</div>;
}

export default Component2;
