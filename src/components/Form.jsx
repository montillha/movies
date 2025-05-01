import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

const Form = () => {
    const navigate = useNavigate();
    const [movie,setMovie]=useState({
        nome:"",
        genero:"",
        ano:""
    });

    const handleBack=()=>{
        navigate('/');
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://68138035129f6313e21179d1.mockapi.io/filme',movie)
        .then(res =>{
            console.log(res);
            
        })
        .catch(err=>console.log(err));
        handleBack();


    }
  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Nome:</label>
      <input type="text" required className="form-control" id="nome" value={movie.nome}
      onChange={ e => setMovie( {...movie, nome: e.target.value} ) }
       />
    </div>

    <div className="mb-3">
      <label htmlFor="genero" className="form-label">Gênero:</label>
      <input type="text" required className="form-control" id="genero"
      value={movie.genero}
      onChange={ e => setMovie( {...movie, genero: e.target.value} ) }
       />
    </div>

    <div className="mb-3">
      <label htmlFor="ano" className="form-label">Ano:</label>
      <input type="text"  required className="form-control" id="ano"
      value={movie.ano}
      onChange={ e => setMovie( {...movie, ano: e.target.value} ) }
       />
    </div>

    <div className="d-grid gap-2 d-md-block">
    <button type="submit" className="btn btn-primary">Cadastrar</button>
     <button type="Button" className="btn btn-danger" onClick={handleBack}>Cancelar</button>
     </div>

  </form>
  )
}

export default Form