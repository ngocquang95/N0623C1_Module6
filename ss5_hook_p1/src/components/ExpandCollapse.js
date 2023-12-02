import { useState } from "react";
import Counter from "./Counter";

function ExpandCollapse() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <h1>Giới thiệu về react</h1>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="btn btn-danger"
      >
        {isExpanded ? "Ẩn" : "Hiển thị"}
      </button>
      {isExpanded && <Counter/>}
    </>
  );
}

export default ExpandCollapse;
