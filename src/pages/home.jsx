import {Link} from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../utils/context";
function Home(){
    const {  lastCalledUser } = useContext(MainContext);
    return(
        <div className="home_container">
            <div className="home_content">
                <h2>Welcome to your contact list</h2>
             {lastCalledUser && (<h2>Last Called User:{lastCalledUser} </h2>)} 
                <Link to="/contacts">See my contacts</Link>
                <Link to="/about">About this Website</Link>
            </div>
        </div>
    )
}
export default Home;
