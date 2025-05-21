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
        <tbody>
          {movies.map((movie)=>(
              <tr key={movie.id} onClick={()=>handleDetails(movie.id) }>
                  <td>
                    <i class="bi bi-film me-2"> </i>
                    {movie.nome}
                  </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
