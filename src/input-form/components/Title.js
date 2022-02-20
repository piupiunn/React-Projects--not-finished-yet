import { React, useState } from "react";

export default function Title() {
  const [name, SetName] = useState("");

  const handleName = () => {
    SetName("");
  };
  return (
    <div>
      <h1>Top Threes of My Life {name}</h1>
      <button onClick={handleName}>İsmi değiştir</button>
    </div>
  );
}
