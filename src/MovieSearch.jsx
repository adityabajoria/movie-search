import { useState } from "react";
import Axios from "axios";

export default function MovieSearch() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await Axios.get(
        `https://imdb-movies-web-series-etc-search.p.rapidapi.com/${search}.json`,
        {
          headers: {
            "x-rapidapi-host":
              "imdb-movies-web-series-etc-search.p.rapidapi.com",
            "x-rapidapi-key":
              "6719316311msh2f17aa5abbfef7ap1089abjsn8ae165d51c06",
          },
        }
      );

      setMovies(response.data.d); // Assuming the data structure matches your example
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="movie-search-container">
      <input
        type="text"
        value={search}
        onChange={toggleInput}
        placeholder="Search for movies..."
        className="movie-search-input"
      />
      <button onClick={fetchMovies} className="movie-search-button">
        Submit
      </button>

      <div className="movie-results-container">
        {movies?.map((movie) => (
          <div key={movie.id} className="movie-item">
            <h3 className="movie-title">Title: {movie.l}</h3>
            <p className="movie-year">Year: {movie.y}</p>
            <p className="movie-details">Details: {movie.s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
