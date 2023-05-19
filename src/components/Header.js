import { Link } from "react-router-dom";

const Header = (props) =>{
    /* !! ispred props.username pretvara vrijednost u boolean vrijednost */
    const isLoggedIn = !!props.username;
    return (
        <>
        {/* Prazan react fragment, služi istu svrhu kao i div, ali manje opterećuje DOM */}
        {isLoggedIn && 
        <div className="App-header">
          <div className='left-section' >
          <div className='logo-section' >
            <img src={require('./img/chatty_icon.png') } alt='logo' className='img-height'></img>
            <h1>Chatty</h1>
            </div>
            <div className='user-section'><p>Korisnik:</p> <p className='username'>{props.username}</p></div>
        </div>
        <div className='right-section'>
        <ul className="main-menu">
                        <li><Link to="/algebra-zavrsni/" >Chat</Link></li>
                        <li><Link to="/algebra-zavrsni/about" >About</Link></li>
                        <li onClick={props.handleLogout} ><Link to="#">Logout</Link></li>
                    </ul>

        </div>
      </div>}

    
      </>
    )
}
export default Header;