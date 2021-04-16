import React from 'react';
// import Tour from './Tour';
import './index.css';

const Tours=({ tours }) => {
return (
    <section>
     <p className="covid-info">Latest covid Information:</p>   
     <div className='title'>
         <h3>Places to visit in Melbourne</h3>
         <div className='underline'></div>
     </div> 
     
    {tours.map((tour) => {
    return <div className="grid-container">
    <div id={tour.id} className="single-tour">
    <h3>{tour.name}</h3>
    <img src={tour.image} alt={tour.name}/>
    <p>{tour.info}</p>
    <footer>
        <div className="tour-info">
           <h4>{tour.price}</h4>
        </div>
    </footer>
    </div>
    </div>
         }
         )}
    
    </section>
  );
  
};

export default Tours;