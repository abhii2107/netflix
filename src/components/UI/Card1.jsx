import { NavLink } from "react-router-dom"
import "./Card.css"

export const Card = ({ currMovie }) => {
    const{Poster,imdbID} = currMovie
    return (
        <>
            <li className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                        <img src={Poster} alt={imdbID} className="poster" />
                    </div>

                    <div className="ticket-container">
                        <div className="ticket-content">
                            
                                <button className="ticket-buy-btn">Watch Now</button>
                            

                        </div>
                    </div>
                </div>
            </li>

        </>
    )
}