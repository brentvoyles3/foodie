import {useState} from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fontawesome/free-solid-svg-icons";


export default function Navbar() {
    const [showSideBar, setShowSideBar] = useState();
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
    },
    {
        name: "Recipes",
        path: "/recipes",
        icon: faList
    },
    {
        name: "Settings",
        path: "/settings",
        icon: faCog
    } 
]
    return (
        <>
        <div className="navbar container">
            <a href="#!" className="logo">F<span>oo</span>dieHub</a>
            <div className="nav-links">
                { links.map(link => (
                    <a href = "#!" key = {link.name}>{link.name}</a> 
                )) }
                <a href="#!" className="active">Home</a>
                <a href="#!">Recipes</a>
                <a href="#!">Settings</a>
            </div>
            <div className="sidebar-btn">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
            </div>
            <Sidebar links={links} />
            </>
            
    )
}