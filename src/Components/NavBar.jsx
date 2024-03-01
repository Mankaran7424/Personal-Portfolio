import React from 'react'
import './style.css';
import { FcBusinessman } from "react-icons/fc";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <IconContext.Provider value={{ size: "5rem", className: "icons" }}>
                            <FcBusinessman />
                            <Link className="navbar-brand" to="/">
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
                                    <Link className="nav-link" to="/about">Home</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link " href='/'>Education</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link " href='/'>Projects</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link " href='/'>Contact</a>
                                </li>
                            </ul>
                            <form className="d-flex">

                                <button className="btn btn-outline-danger" type="submit">HireMe!</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    )
}
