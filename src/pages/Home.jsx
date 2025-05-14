import React, { useContext, useEffect } from 'react'
import Table from '../components/Table'
import { MovieContext } from '../components/MovieContext'
import axios from 'axios';
import FormUpdate from '../components/FormUpdate';

const Home = () => {
    const {movies,setMovies} = useContext(MovieContext);
    useEffect(()=>{
        axios.get('https://68138035129f6313e21179d1.mockapi.io/filme')
        .then(res => setMovies(res.data))
        .catch(err=>console.log(err));
    },[]);
    
  return (
    <Table/>
  
  )
}

export default Home