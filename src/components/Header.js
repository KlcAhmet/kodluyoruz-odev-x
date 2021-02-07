import { NavLink } from "react-router-dom"
import Logo from "./Logo"

function Header({ links }) {
    const linkler = []

    links.forEach(({ id, title, link }) => {
        linkler.push(<NavLink exact className="navbar__link" to={link} key={id}>{title}</NavLink>)
    });

    return <>
        <header>
            <nav>
                <div className="navbar container">
                    <Logo />
                    {linkler}
                </div>
            </nav>
        </header>
    </>

}


export default Header