import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const FormDelete = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [movie, setMovie] = useState(null);

  const handleSearch = () => {
    axios
      .get(`https://68138035129f6313e21179d1.mockapi.io/filme/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => {
        console.error(err);
        alert("Filme não encontrado!");
        setMovie(null);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://68138035129f6313e21179d1.mockapi.io/filme/${id}`)
      .then(() => {
        alert("Filme deletado com sucesso!");
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao deletar o filme!");
      });
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">ID do Filme:</label>
        <input
          type="text"
          className="form-control"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button className="btn btn-secondary mt-2" onClick={handleSearch}>Procurar</button>
      </div>

      {movie && (
        <div className="card mt-4 p-3">
          <h5>Informações do Filme</h5>
          <p><strong>Nome:</strong> {movie.nome}</p>
          <p><strong>Gênero:</strong> {movie.genero}</p>
          <p><strong>Ano:</strong> {movie.ano}</p>
          <button className="btn btn-danger me-2" onClick={handleDelete}>Deletar</button>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default FormDelete;