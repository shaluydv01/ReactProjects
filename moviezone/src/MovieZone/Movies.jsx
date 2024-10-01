import React from 'react'
import { movies } from "./data.js"

export const Movies = () => {
    const [movieList, setMovieList] = useState(movies);
  return (
    <div>
        {movieList.map((data) => (
            <div key={data.id}>
                <div>
                    <img src={data.poster_path} alt="" style={{width:'250px'}}/>
                </div>
                <h3>{data.title}</h3>
                <p>{data.release_date}</p>
            </div>
        ))}
    </div>
  );
};
