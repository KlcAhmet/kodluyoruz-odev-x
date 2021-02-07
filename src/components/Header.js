import { NavLink } from "react-router-dom"
import Logo from "./Logo"

function Header({ links }) {
    const linkler = []

    links.forEach(({ id, title, link }) => {
        linkler.push(<NavLink exact to={link} key={id}>{title}</NavLink>)
    });

    return <>
        <header className="header container">
            <section>
                <div className="logo">
                    <Logo />
                </div>
                <nav className="navbar">
                    <div>
                        {linkler}
                    </div>
                </nav>
            </section>
        </header>
    </>

}


export default Header