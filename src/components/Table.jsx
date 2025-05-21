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
                    <i className="bi bi-film me-2" style={{ color: '#222', filter: 'drop-shadow(0 0 1px black)' }}> </i>
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
