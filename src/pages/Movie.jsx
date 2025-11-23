import { useLoaderData } from "react-router-dom"
import { getMoviesData } from "../API/GetApiData";
import { Card } from "../components/UI/Card1";


export const Movie = () => {
    const movieData = useLoaderData();
    console.log(movieData);
    return (


        <section className="movie-section">
            <ul className="container grid grd-four--cols">
                {getMoviesData.search.map((currMovie) => {
                    // whenevr you are using map method and calling a componenet then passing key is necessary
                    return <Card key={currMovie.imdbID} currMovie={currMovie} />;
                    // we are passing currMovie because we can easily destructure and gets it's properties 
                })}
            </ul>
        </section>

    )
}