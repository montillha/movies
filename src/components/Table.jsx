import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { useNavigate } from "react-router-dom";

const Table = () => {
    const navigate = useNavigate();
    const{movies,setMovies} = useContext(MovieContext);

    const handleDetails = (id) => {
        navigate(`/details/${id}`);
    };
  return (
    <div className='table-container'>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie)=>(
            <tr key={movie.id} onClick={()=>handleDetails(movie.id) }>
                <td>{movie.id}</td>
                <td>{movie.nome}</td>
            </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
