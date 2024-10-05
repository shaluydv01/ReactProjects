import React, { useState, useEffect } from "react";
import "./Meal.css";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("indian");
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const fetchDataAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );

      const data = await api.json();

      console.log(data);

      setMealData(data.meals);
    };

    fetchDataAPI();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );

    const data = await api.json();

    console.log(data.meals);
    setMealData(data.meals);

    setInputData("");
  };

  return (
    <>
      <div style={{ backgroundColor: "black", padding: "25px" }}>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setArea("indian")}
            type="button"
            className="btn btn-outline-primary mx-4 fw-bolder"
          >
            Indian
          </button>
          <button
            onClick={() => setArea("chinese")}
            type="button"
            className="btn btn-outline-danger mx-4 fw-bolder"
          >
            Chinese
          </button>
          <button
            onClick={() => setArea("american")}
            type="button"
            className="btn btn-outline-warning mx-4 fw-bolder"
          >
            American
          </button>
          <button
            onClick={() => setArea("thai")}
            type="button"
            className="btn btn-outline-info mx-4 px-4 fw-bolder"
          >
            Thai
          </button>
          <button
            onClick={() => setArea("Canadian")}
            type="button"
            className="btn btn-outline-success mx-4 fw-bolder"
          >
            Canadian
          </button>
          <button
            onClick={() => setArea("british")}
            type="button"
            className="btn btn-outline-light mx-4 fw-bolder"
          >
            British
          </button>
          <button
            onClick={() => setArea("russian")}
            type="button"
            className="btn btn-outline-secondary mx-4 fw-bolder"
          >
            Russian
          </button>
        </div>

        <form onSubmit={submitHandler} className="mx-auto text-center my-3">
          <input onChange={(e) => setInputData(e.target.value)} type="text" />
        </form>

        <div
          style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "30px 20px 0px 10px",
            textAlign: "center",
            color: "white",
          }}
        >
          {mealData.map((data) => (
            <div key={data.idMeal}>
              <div
                style={{
                  border: "2px solid red",
                  borderRadius: "10px",
                  margin: "15px",
                }}
              >
                <img
                  src={data.strMealThumb}
                  alt=""
                  style={{ width: "250px", height: "auto" }}
                />
              </div>
              <div>
                <h4 style={{ width: "250px", textAlign: "center" }}>
                  {data.strMeal}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Meal;
