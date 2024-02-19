import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    let history = useNavigate();


    const logout = () => {
        localStorage.removeItem("token");
        history("/login");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div className="container-fluid">
                     <Link className="navbar-brand"  to={"/"}>DEMO Website</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                 <Link className="nav-Links active" aria-current="page"  to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                 <Link className="nav-Links" to={"/about"}>About</Link>
                            </li>
                            <li className="nav-item">
                                 <Link className="nav-Links" to={"/crud"}>CRUD</Link>
                            </li>
                            
                        </ul>
                       {!localStorage.getItem("token") ? <div className="d-flex">
                            <Link to={"/login"} className="btn btn-outline-success mx-2" type="submit">Login</Link>
                            <Link to={"/signup"} className="btn btn-outline-success" type="submit">SignUp</Link>
                        </div> : <div className="d-flex">
                            <button className="btn btn-outline-success mx-2" type="submit" onClick={logout}>Log Out</button>
                        </div>}
                    </div>
                </div>
            </nav>
        </>
    )
}
