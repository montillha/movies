import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const FormDelete = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [movie, setMovie] = useState(null);

  const handleBack = () => {
    navigate('/');
  };

  const handleSearch = () => {
    axios
      .get(`https://68138035129f6313e21179d1.mockapi.io/filme/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => {
        console.error(err);
        alert('Filme não encontrado!');
        setMovie(null);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://68138035129f6313e21179d1.mockapi.io/filme/${id}`)
      .then(() => {
        alert('Filme deletado com sucesso!');
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        alert('Erro ao deletar o filme!');
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Formulário de busca por ID */}
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID do Filme:</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-secondary" onClick={handleSearch}>Procurar</button>
              <button type="button" className="btn btn-danger" onClick={handleBack}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>

      {movie && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card mt-4 p-4 text-center shadow mx-auto"
              style={{ maxWidth: '100%' }} // impede que o card ultrapasse a largura da coluna
            >
              <h5 className="mb-3">Informações do Filme</h5>

              <img
                src={movie.posterUrl}
                alt={`Cartaz de ${movie.nome}`}
                className="rounded mb-3"
                style={{ maxWidth: '200px', height: 'auto', margin: '0 auto', display: 'block' }} // garante que a imagem fique centralizada e menor
              />

              <p><strong>Nome:</strong> {movie.nome}</p>
              <p><strong>Gênero:</strong> {movie.genero}</p>
              <p><strong>Ano:</strong> {movie.ano}</p>

              <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-danger" onClick={handleDelete}>Deletar</button>
                <button className="btn btn-secondary" onClick={handleBack}>Cancelar</button>
              </div>
               
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FormDelete;