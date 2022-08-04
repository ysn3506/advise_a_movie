import React, { useEffect, useState } from 'react';
import './App.css';
import { getGenres } from './app/services/API';

function App() {
   // const [loading, setLoading] = useState(true);
  useEffect(() => {
    getGenres().then(resp=>console.log(resp)).catch(()=>console.log("hata"))
  },[])
  

  return (
    <div className="App">
        <h2>Deneme</h2>
    </div>
  );
}

export default App;
