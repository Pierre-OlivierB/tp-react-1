import React, { useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <div className="header">
        <h1>React Cook</h1>
        <input
          type="text"
          placeholder="taper le nom d'un aliment (in english)"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
      </div>

      <Card inputText={inputText} />
    </div>
  );
};

export default Home;
