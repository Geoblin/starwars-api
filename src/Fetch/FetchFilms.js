import React, { useState, useEffect } from "react";
import GetCharacters from "./GetCharacters";

const FetchFilms = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        let response = await fetch("https://swapi.py4e.com/api/films");
        let data = await response.json();
        setFilms(data.results);
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    }
    fetchFilms();
  },[]);
 

  return (
    <>
      <div className="FilmBox">
        {loading && <div> loading...</div>}

        {films.map((film) => (
          <GetCharacters key={film.episode_id} film={film} />
        ))}
      </div>
    </>
  );
};

export default FetchFilms;
