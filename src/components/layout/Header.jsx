import { NavLink } from "react-router-dom"

export const Header =()=>{
    return(
        <>
        <header className="section-navbar">
            <section className="top_text">
                <div className="head container">
                    <div className="head_text">
                        <p>blah blah blah!!!!</p>
                    </div>
                    <div className="sign_in_up">
                        {/* alternative of anchor tag in react router is navlink */}
                        <NavLink to="#">SIGN IN</NavLink>
                        <NavLink to="#">SIGN UP</NavLink>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="navbar-brand">
                    <NavLink to="index">
                        <p>NETFLIX</p>
                    </NavLink>
                </div>

                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <NavLink to="/" className={({isActive})=>
                                isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movie" className="nav-link">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contact" className="nav-link">Contact</NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
        
        </>
    )
}