import style from "./Home.module.css"
import { Link } from "react-router-dom"
const Home =()=>{
    return(
        <div id={style.homePage}>
            <Link to="/">Create-User</Link>
            <Link to="/user">Users</Link>


        </div>
    )
}
export default Home