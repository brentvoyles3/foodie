import {useState} from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
    const [showSideBar, setShowSideBar] = useState();
    const links = [
        {
            name: "Home",
            path: "/"
    },
    {
        name: "Recipes",
        path: "/recipes"
    },
    {
        name: "Settings",
        path: "/settings"
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
            <Sidebar/>
            </>
            
    )
}