import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';
import MovieDetails from './pages/MovieDetails';
import Delete from './pages/Delete';
import Header from './components/Header';
import { MovieProvider } from './components/MovieContext';

function App() {

  return (
    <BrowserRouter>
    <MovieProvider>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path="details/:id" element={<MovieDetails/>}/>
        <Route path="update" element={<Update/>}/>
        <Route path="delete" element={<Delete/>}/>

      </Routes>
      </MovieProvider>
    </BrowserRouter>
  )
}

export default App
