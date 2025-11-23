import { Outlet, useNavigate, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

const AppLayout = () => {
    const navigation =useNavigation();
    console.log(navigation)
    if(navigation.state === "loading") return <h1>Loading...</h1>
    return (
        <>
            <Header />
            {/* an outlet should be used in  parent root element to render their child root element */ }
            <Outlet/>
            <Footer />

        </>
    )
}

export default AppLayout