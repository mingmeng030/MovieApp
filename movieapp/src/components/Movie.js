import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres}){
    return(
        <Link to={{
            pathname : `/movie/${id}`,
            state: { year, title, summary, poster, genres }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <div className="movieData">
                    <div className="display">
                        <h3 className="movieTitle">{title}</h3>
                        <h5 className="movieYear">{year}</h5>
                    </div>
                    <ul className="movieGenre">
                        {genres.map((genre, index)=> <li key={index} className="genres_genre">{genre}</li>)}
                    </ul>
                    <p className="movieSummary">{summary.slice(0,150)}...</p>
                </div>       
            </div>
        </Link>
    ) ;
}

Movie.propTypes={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;