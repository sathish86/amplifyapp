function Header(props){
    return (
        <header className="header">
            <img className="header--image" src="../images/Trollface.png"/>
            <h2 className="header--title">Meme generator</h2>
            <h4 className="header--project">React Course-4</h4>
            <h4>"{props.user_name}"</h4>
        </header>
    )
}

export default Header;