import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './App.css';
const url='http://localhost:3001';


function App(){
  const [loading,setLoading]=useState(true);
  const [tours,setTours]=useState([]);

  // fetching the data i,e tours
  const fetchtheTours = async () =>{
    setLoading(true);
    
    try {
      const response = await fetch(`${url}/Melbourne`);
      const tours= await response.json();
      
      setLoading(false);
      setTours(tours);
      
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // to invoke the function 'fetchthetours' , useEfects is used
  useEffect(() => {
  fetchtheTours();
  }, []);

  //multiple returns first for loading the second one (by default)for Tours Components.
  if (loading){
     return (
     <main>
     <Loading />
     </main>
    );
   }
   
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
  
}

export default App;

