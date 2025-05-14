import { useContext, useState } from "react";
import { MovieContext } from "../components/MovieContext";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const { movies, setMovies } = useContext(MovieContext);
  const [searchId, setSearchId] = useState("");
  const [foundMovie, setFoundMovie] = useState(null);
  const [form, setForm] = useState({ title: "", director: "", year: "" });
  const navigate = useNavigate();

  const handleSearch = () => {
    const movie = movies.find((m) => m.id === parseInt(searchId));
    if (movie) {
      setFoundMovie(movie);
      setForm({ title: movie.title, director: movie.director, year: movie.year });
    } else {
      alert("Filme não encontrado!");
      setFoundMovie(null);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const updatedMovies = movies.map((m) =>
      m.id === foundMovie.id ? { ...m, ...form, year: parseInt(form.year) } : m
    );
    setMovies(updatedMovies);
    alert("Filme atualizado com sucesso!");
    navigate("/");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Editar Filme</h2>

      <label>
        ID do Filme:
        <input
          type="number"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Procurar</button>

      {foundMovie && (
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Diretor:</label>
            <input
              type="text"
              name="director"
              value={form.director}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Ano:</label>
            <input
              type="number"
              name="year"
              value={form.year}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button onClick={handleUpdate}>Alterar</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
}