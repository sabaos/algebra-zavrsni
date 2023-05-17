const Header = (props) =>{
    /* !! ispred props.username pretvara vrijednost u boolean vrijednost */
    const isLoggedIn = !!props.username;
    return (
        <>
        {/* Prazan react fragment, služi istu svrhu kao i div, ali manje opterećuje DOM */}
        {isLoggedIn && 
        <div className="App-header">
          <div className='left-section' ><img src={require('./img/chatty_icon.png')} className='img-height'></img>
          <h1>Chatty</h1>
          <p>{props.username}</p></div>
        <div className='right-section'>
          <button className='sidebar-btn' onClick={props.toggleSidebar}>Izbornik</button>
          <button onClick={props.handleLogout}>Logout</button>
        </div>
      </div>}

      {!isLoggedIn &&  <div className="App-header">
        <div></div>
        <h1>Chatty</h1>
        {/* Prazan div služi za flex pozicioniranje elemenata */}
        <div></div>
      </div>}
      </>
    )
}
export default Header;