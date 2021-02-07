import { NavLink } from "react-router-dom"

function Header({ links }) {
    const linkler = []

    links.forEach(({ id, title, link }) => {
        linkler.push(<NavLink exact to={link} key={id}>{title}</NavLink>)
    });

    return <>
        <header>
            <nav>
                <div className="container">
                    {linkler}
                </div>
            </nav>
        </header>
    </>

}


export default Header