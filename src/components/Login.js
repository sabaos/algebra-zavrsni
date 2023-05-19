import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../style.css";

const Login = (props) =>{
    const [usernameText, setUsernameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onLogin(usernameText);
        navigate("/algebra-zavrsni/");        
    }
    
    return (
      
    <div className="container">
        
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="title">
            <img src={require('./img/chatty_icon_white.png')} className='img-height'></img>
            </label>
            <input className="login-input" 
            id="title"
            type="text" 
            placeholder="Unesite Vaše ime" 
            required 
            value={usernameText} 
            onChange={(e)=> setUsernameText(e.target.value)}/>
            <button className="button">Login</button>
        </form>
    </div>)
}

export default Login;