import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

const PaginaPadrao = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default PaginaPadrao