import React from 'react'
import './style.css';
import { FcBusinessman } from "react-icons/fc";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg mx-2 rounded">
                    <div className="container-fluid ">
                        <IconContext.Provider value={{ size: "4rem", className: "icons" }}>
                            <FcBusinessman />
                            <Link className="navbar-brand" to="/index">
                                Mankaran Singh
                                <h6>Sofware Developer</h6>
                            </Link>
                        </IconContext.Provider>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link " to='/education'>Education</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link " to='/projects'>Projects</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link " to='/skills'>Technologies</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link " to='/hireme'>Contact</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <Link to={"/hireme"}>
                                    <button className="btn btn-danger mx-3" type="submit">HireMe!</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    )
}
