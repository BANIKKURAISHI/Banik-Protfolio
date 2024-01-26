import { createBrowserRouter } from "react-router-dom"
import Home from "../A1(Index)/Home"

const myCreateRoute=createBrowserRouter([
    {
    path:'/',
    element:<Home></Home>
    }
])


export default myCreateRoute