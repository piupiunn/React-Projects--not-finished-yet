import React from "react";
import { useState } from "react";
function App() {
  const [name, setName] = useState("Caner");

  const nameHandler = () => {
    setName("Usul");
  };

  return (
    <div>
      <h2>Selam {name}</h2>
      <button onClick={nameHandler}>İsmi değiştir</button>
    </div>
  );
}

export default App;
