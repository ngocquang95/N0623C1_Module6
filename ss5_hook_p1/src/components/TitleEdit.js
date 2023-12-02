import { useState, useEffect } from "react";

function TitleEdit() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
  });

  return (
    <>
      <label>Title</label>
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
    </>
  );
}

export default TitleEdit;
