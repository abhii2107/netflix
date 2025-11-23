import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

const AppLayout = () => {
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