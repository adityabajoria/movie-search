import "./App.css";

import MovieSearch from "./MovieSearch";

export default function App() {
  return (
    <div className="App">
      <h3>Search IMDB Movies</h3>
      <p>Welcome to the IMDB movie search, searching thousands of movies.</p>
      <MovieSearch />
    </div>
  );
}
