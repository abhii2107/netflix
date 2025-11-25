
import "./MovieDetails.css";
import React from "react"
import { useLoaderData } from "react-router-dom"

export const MovieDetails = () => {
    
    const movieData = useLoaderData();
    const { Actor, Poster, Title, Type, Year, Plot, BoxOffice, imdbID } = movieData;

    return (
        <section className="movie-details-section">
            <div className="movie-details-container">

                <div className="movie-details-poster-wrap">
                    <img src={Poster} className="movie-details-poster" alt={Title} />
                </div>

                <div className="movie-details-info">
                    <h2 className="movie-details-title">{Title}</h2>
                    <p className="movie-details-plot">{Plot}</p>

                    <p><strong>Type:</strong> {Type}</p>
                    <p><strong>Year:</strong> {Year}</p>
                    <p><strong>Actors:</strong> {Actor}</p>
                    <p><strong>Box Office:</strong> {BoxOffice}</p>

                    <button className="movie-details-btn">Watch Now</button>
                </div>

            </div>
        </section>
    )
}
