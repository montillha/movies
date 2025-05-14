import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const FormUpdate = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [movie, setMovie] = useState(null);

  const handleBack = () => {
    navigate('/');
  };

  const handleSearch = () => {
    axios
      .get(`https://68138035129f6313e21179d1.mockapi.io/filme/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert('Filme não encontrado!');
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://68138035129f6313e21179d1.mockapi.io/filme/${id}`, movie)
      .then(() => {
        alert('Filme atualizado com sucesso!');
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        alert('Erro ao atualizar!');
      });
  };

  return (
   
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">


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

        {movie && (
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome:</label>
              <input
                type="text"
                required
                className="form-control"
                id="nome"
                value={movie.nome}
                onChange={(e) => setMovie({ ...movie, nome: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="genero" className="form-label">Gênero:</label>
              <input
                type="text"
                required
                className="form-control"
                id="genero"
                value={movie.genero}
                onChange={(e) => setMovie({ ...movie, genero: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ano" className="form-label">Ano:</label>
              <input
                type="text"
                required
                className="form-control"
                id="ano"
                value={movie.ano}
                onChange={(e) => setMovie({ ...movie, ano: e.target.value })}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Alterar</button>
              <button type="button" className="btn btn-danger" onClick={handleBack}>Cancelar</button>
            </div>
          </form>
        )}

      </div>
    </div>
  </div>


  );
};

export default FormUpdate;
