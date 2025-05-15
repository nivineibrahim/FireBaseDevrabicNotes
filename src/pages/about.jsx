import {useNavigate} from "react-router-dom"
function About(){
    const navigate= useNavigate()
    return(
        <div className="home_container">
            <div className="home_content">
                <p>This demo website is developed by Devrabic.The best arabic community for <b>Web Development</b></p>
                <button onClick={()=>navigate("/")}>Go back</button>
            </div>
        </div>
    )
}
export default About;