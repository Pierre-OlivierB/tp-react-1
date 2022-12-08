import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
      .then((res) => {
        setData(res.data.meals);
      });
  }, []);

  return (
    <ul className="mealsList">
      {data.map((meal) => (
        <div className="card" key={meal.idMeal}>
          <h4>{meal.strMeal}</h4>
          <p>Provenance : {meal.strArea}</p>
          <img src={meal.strMealThumb} alt="test" />
          <p>{meal.strInstructions}</p>
        </div>
      ))}
    </ul>
  );
};

export default Card;
