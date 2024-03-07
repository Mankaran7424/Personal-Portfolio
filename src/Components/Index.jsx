import React from 'react'
import { IconContext } from 'react-icons';
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";



export default function Main() {
    return (
        <>
            <main>
                <div className="container bg-light">
                    <div className="row pt-5">
                        <div className="col-7 m-auto mb-4 p-3 shadow-lg bg-light" id="picBackground">
                            <div className="card m-auto shadow-lg border bg-light" id="card">
                                <img className="card-img-top img-fluid rounded-circle w-50 h-50 m-auto mt-3"
                                    src="./img.jpg" alt="Profile-Pic"></img>
                                <div className="card-body text-center">
                                    <h3 className=" h3 card-title">Mankaran Singh</h3>
                                    <p className="card-text text-danger">Full Stack Software Developer</p>
                                </div>

                                <div className=' mx-2 align-self-center'>
                                    <a href="https://github.com/Mankaran7424" target='_blank' rel="noreferrer">
                                        <IconContext.Provider value={{ size: "2rem", className: 'icons', color: "black" }}>
                                            <VscGithub />
                                        </IconContext.Provider>
                                    </a>
                                    <a href="https://www.linkedin.com/in/mankaran-singh7424/" target='_blank' rel="noreferrer">
                                        <IconContext.Provider value={{ size: "2.5rem", className: 'icons', color: "black" }}>
                                            <CiLinkedin />
                                        </IconContext.Provider>
                                    </a>
                                    <a href="https://www.facebook.com/mankarn.ramgarhia/" target='_blank' rel="noreferrer">
                                        <IconContext.Provider value={{ size: "2.5rem", className: 'icons', color: "black" }}>
                                            <RiFacebookBoxLine />
                                        </IconContext.Provider>
                                    </a>
                                    <a href="https://twitter.com/Mankaran1984" target='_blank' rel="noreferrer">
                                        <IconContext.Provider value={{ size: "2rem", className: 'icons', color: "black" }}>
                                            <FaSquareXTwitter />
                                        </IconContext.Provider>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
