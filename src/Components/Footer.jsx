import React from 'react'
import { IconContext } from 'react-icons';
import { FcApproval } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./style.css"

export default function Footer() {
    return (
        <>
            <footer className="text-center w-75 rounded m-auto my-2">
                <div className="container pt-3">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-1">
                        <a className="p-2 d-block-inline" href="https://github.com/Mankaran7424" target='_blank' rel="noreferrer">
                            <IconContext.Provider value={{ color: "white", size: "2rem", className: "icons" }}>
                                <VscGithub />
                            </IconContext.Provider>
                        </a>
                        <a className="p-2 d-block-inline" href="https://www.linkedin.com/in/mankaran-singh7424/" target='_blank' rel="noreferrer">
                            <IconContext.Provider value={{ color: "white", size: "2.5rem", className: "icons" }}>
                                <CiLinkedin />
                            </IconContext.Provider></a>
                        <a className="p-2 d-block-inline" href="https://www.facebook.com/mankarn.ramgarhia/" target='_blank' rel="noreferrer">
                            <IconContext.Provider value={{ color: "white", size: "2.5rem", className: "icons" }}>
                                <RiFacebookBoxLine />
                            </IconContext.Provider>
                        </a>
                        <a className="p-2 d-block-inline" href="https://twitter.com/Mankaran1984" target='_blank' rel="noreferrer">
                            <IconContext.Provider value={{ color: "white", size: "2rem", className: "icons" }}>
                                <FaSquareXTwitter />
                            </IconContext.Provider>
                        </a>
                    </section>
                </div>

                {/* Copyright  */}
                <div className="text-center p-2" >
                    <IconContext.Provider value={{ size: "1.2rem" }}>
                        Copyright ©2023 by :  M a n k a r a n  S i n g h <FcApproval />
                    </IconContext.Provider>
                </div>
            </footer>
        </>
    )
}
