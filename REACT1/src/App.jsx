import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const addMovie = () => {
    if (title.trim() === "") return alert("Enter a movie name!");
    const newMovie = { id: Date.now(), title, comment, rating };
    setMovies([...movies, newMovie]);
    setTitle("");``
    setComment("");
    setRating(0);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleStarClick = (star) => {
    setRating(star);
  };

  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2> Movies Watch List</h2>

      <input
        type="text"
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <div>
        <p>Rate this movie:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleStarClick(star)}
            style={{
              cursor: "pointer",
              fontSize: "22px",
              // color: star <= rating ? "gold" : "gray",
            }}
          >
            {star <=rating ? '⭐' :'✰ ' }
            {/* ✰ */}
          </span>
        ))}
      </div>

      <button
        onClick={addMovie}
        style={{
          marginTop: "10px",
          background: "blue",
          color: "white",
          padding: "8px 15px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Movie
      </button>

      <h3 style={{ marginTop: "20px" }}> Your Movies</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {movies.map((movie) => (
          <li
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <strong>{movie.title}</strong>
            <p>{movie.comment}</p>
            <p>Rating: {renderStars(movie.rating)}</p>
            <button
              onClick={() => removeMovie(movie.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;