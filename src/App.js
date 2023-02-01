
import axios from "axios";
import { useEffect, useState } from "react";
//mport api from "./api/axiosConfig";

import './App.css';

function App() {

  const [movies, setMovies] = useState()


  const getMovies = async () => {


    try {
      const response = await axios.get("http://localhost:8080/api/v1/movies")
      console.log(response.data);
      setMovies(response.data);

    }catch(error){
      console.log(error);
    }

    
  }

  useEffect(()=> {
    getMovies();
  }, []);
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
