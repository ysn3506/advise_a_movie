import React, { useEffect } from 'react';
import './App.scss';
import { getGenres } from './app/services/API';




function App() {
   // const [loading, setLoading] = useState(true);
  useEffect(() => {
    getGenres().then(resp=>console.log(resp)).catch(()=>console.log("hata"))
  },[])
  

  return (
    <div className="App">
        <h2>deneme</h2>
    </div>
  );
}

export default App;
