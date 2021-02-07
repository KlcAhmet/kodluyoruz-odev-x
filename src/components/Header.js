import { NavLink } from "react-router-dom"

function Header({ links }) {
    const linkler = []

    links.forEach(({ id, title, link }) => {
        linkler.push(<NavLink exact to={link} key={id}>{title}</NavLink>)
    });

    return <>
        <header>
            <nav>
                {links}
            </nav>
        </header>
    </>

}


export default Header