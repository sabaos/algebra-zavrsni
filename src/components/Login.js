import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../components/style.css"

const Login = (props) =>{
    const [usernameText, setUsernameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onLogin(usernameText);
        navigate("/algebra-zavrsni/");        
    }
    
    return (
    <div className="background">
    <div className="container ">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="title">
                <h1 className="caps">Login</h1>
            </label>
            <input className="user-name"
            id="title"
            type="text" 
            placeholder="Enter your username" 
            required 
            value={usernameText} 
            onChange={(e)=> setUsernameText(e.target.value)}/>
            <button className="button">Login</button>
        </form>
    </div>
    </div>)
}

export default Login;