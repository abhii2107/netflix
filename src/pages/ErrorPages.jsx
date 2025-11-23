import { useNavigate, useRouteError } from "react-router-dom"
// usenavigate hook return a function wich helps us to navigate or propogate like if i get any error after loading some pags then on clicking go back button will take you to that page that you was on before the error it willnot ake back to the home page

export const ErrorPages = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleGoBack =()=>{
        //navigate("/");
        navigate(-1);// means go back jha se aaye thewahi pe wapis chle jao
    }

    if (error.status === 404) {
        return (
            <section className="error-page">
                <div className="error-content">

                    <h1 className="error-code">404</h1>

                    <p className="error-message">
                        Oops! The scene you're looking for doesn't exist.
                    </p>

                    <p className="error-subtitle">
                        Maybe it got lost in the cutting room floor 🎬
                    </p>

                    {/* <NavLink to="/" className="">
                        Go Back 
                    </NavLink> */}
                    <button className="error-btn" onClick={handleGoBack}>Go Back</button>
                </div>
            </section>
        )
    }
    console.log(error);
    return <h1>The page You Are Looking Does not exist</h1>
}