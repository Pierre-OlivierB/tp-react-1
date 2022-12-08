import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <div className="header">
        <h1>React Cook</h1>
        <input
          type="text"
          placeholder="taper le nom d'un aliment (in english)"
        />
      </div>
      <Card />
    </div>
  );
};

export default Home;
