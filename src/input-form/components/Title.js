import { React, useState } from "react";

export default function Title() {
  const [name, SetName] = useState("Caner");

  const handleName = () => {
    SetName("Usul");
  };
  return (
    <div>
      <h1>Selam {name}</h1>
      <button onClick={handleName}>İsmi değiştir</button>
    </div>
  );
}
