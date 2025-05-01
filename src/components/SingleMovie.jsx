import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleMovie = () => {
    const{id} = useParams();
    const [movie,setMovie]=useState({
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
    <div  className="container d-flex justify-content-center">
      <div className="card shadow mt-3">
      <div className="card-body">
        <h4 className="card-title text-center">Detalhes do filme:</h4>
        <p className="card-text"><strong>Nome:</strong> {movie.nome}</p>
        <p className="card-text"><strong>Gênero:</strong> {movie.genero}</p>
        <p className="card-text"><strong>Ano:</strong> {movie.ano}</p>
        <button className="btn btn-danger mt-2" onClick={handleBack} >Voltar</button>
      </div>
    </div>
  </div>
  )
}

export default SingleMovie