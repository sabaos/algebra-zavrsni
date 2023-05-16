const Header = (props) =>{
    /* !! ispred props.username pretvara vrijednost u boolean vrijednost */
    const isLoggedIn = !!props.username;
    return (
        <>
        {/* Prazan react fragment, služi istu svrhu kao i div, ali manje opterećuje DOM */}
        {isLoggedIn && 
        <div className="App-header">
        <button className='sidebar-btn' onClick={props.toggleSidebar}>Izbornik</button>
        <h1>{props.username}'s Chat Room</h1>
        <button onClick={props.handleLogout}>Logout</button>
      </div>}

      {!isLoggedIn &&  <div className="App-header">
        <div></div>
<<<<<<< Updated upstream
        <h1>Chat Application</h1>
=======
        <img src={require('./img/chatty_icon.png')} height="50px"/>
        <h1>Chatty</h1>
>>>>>>> Stashed changes
        {/* Prazan div služi za flex pozicioniranje elemenata */}
        <div></div>
      </div>}
      </>
    )
}
export default Header;