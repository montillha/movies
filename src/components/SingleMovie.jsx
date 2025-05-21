import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleMovie = () => {
    const{id} = useParams();
    const [movie,setMovie]=useState({
        id:"",
        posterUrl:"",
        nome:"",
        genero:"",
        ano:""
    })
    const navigate = useNavigate();
    const handleBack=()=>{
        navigate('/');
    }

    useEffect(()=>{
        axios.get("https://68138035129f6313e21179d1.mockapi.io/filme/"+id)
        .then(res=>setMovie(res.data))
        .catch(err=>console.log(err));

    },[]);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow mt-3">
        <div className="card-body text-center">
          <h4 className="card-title">Detalhes do filme:</h4>
          <p className="card-text fs-4"><strong>ID:</strong> <strong>{movie.id}</strong></p>
          <img
            src={movie.posterUrl}
            alt={`Cartaz de ${movie.nome}`}
            style={{ maxWidth: "200px", borderRadius: "8px", marginBottom: "16px" }}
          />
          <p className="card-text"><strong>Nome:</strong> {movie.nome}</p>
          <p className="card-text"><strong>Gênero:</strong> {movie.genero}</p>
          <p className="card-text"><strong>Ano:</strong> {movie.ano}</p>
          <button className="btn btn-danger mt-2" onClick={handleBack}>Voltar</button>
        </div>
      </div>
    </div>

  )
}

export default SingleMovie