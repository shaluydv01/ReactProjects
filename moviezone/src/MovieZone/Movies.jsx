import React, {useState} from 'react'
import {movies} from "./data.js";

const Movies = () => {
    const [movieList, setMovieList] = useState(movies);
  return (
    <div 
    style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        gap: '2rem',
        width:'1200px',
        // backgroundColor:'black',
        textAlign:'center',
        margin: 'auto'
        }}>
        {movieList.map((data) => (
            <div key={data.id} style={{maxWidth:'250px'}}>
                <div style={{padding: '10px'}} className='hover_effect'>
                    <img src={data.poster_path} alt="" style={{width:'200px', 
                        border:'1px solid yellow', borderRadius: '10px'}}/>
                </div>
                <h3>{data.title}</h3>
                <p>{data.release_date}</p>
            </div>
        ))}
    </div>
  );
};

export default Movies