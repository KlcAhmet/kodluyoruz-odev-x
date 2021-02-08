import { NavLink } from "react-router-dom"
import Logo from "./Logo"

function Header({ links }) {
    const linkler = []

    links.forEach(({ id, title, link }) => {
        linkler.push(<NavLink className="navlink__link" exact to={link} key={id}>{title}</NavLink>)
    });

    return <>
        <header className="header container">
            <section>
                <div className="row d-flex align-items-center">
                    <div className="logo col-12 col-md-6">
                        <Logo />
                    </div>
                    <div className="col-12 col-md-6">
                        <nav >
                            <div className="navlink">
                                {linkler}
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </header>
    </>

}


export default Header