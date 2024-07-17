import { FontAwesomeIcon } from "@fontawesome/react-fontawesome"

export default function SideBar({links}) {
    return(
        <div className="sidebar">
        {links.map(link => (
            <a className="sidebar-link" href="#!" key={link.name}>
            <FontAwesomeIcon icon = {link.icon}></FontAwesomeIcon>
                {link.name}
                </a>
        )) }
        </div>
    );
}