import React from 'react'
import { IconContext } from 'react-icons';
import { FcBusinessman, FcVoicePresentation } from "react-icons/fc";
import "./style.css";
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <div className="container shadow-lg m-5">
                <h1 className="h2 m-4 p-3 ">
                    <IconContext.Provider value={{ size: "4rem", className: "icons" }}>
                        <FcBusinessman /> K N O W - ME - M O R E!
                    </IconContext.Provider>
                </h1>
                <div className="divider"></div>
                <div className="row my-3 justify-content-around">
                    <div className="col-sm-4">
                        <ul className="list-group mt-3 ml-0 mb-lg-3">
                            <li className="list-group-item mb-4 shadow">Name: Mankaran Singh</li>
                            <li className="list-group-item mb-4 shadow">Phone: +91-9463459863</li>
                            <li className="list-group-item mb-4 shadow">Email: mankaran268@gmail.com</li>
                            <li className="list-group-item mb-4 shadow">Address: BTM Layout, Bangalore</li>
                            <Link to="/hireme" className="btn btn-primary">HIRE ME</Link>
                        </ul>
                    </div>

                    <div className="col-sm-6 mt-3 mb-5 shadow-lg">
                        <h1 className="h1 m-4">HELLO <FcVoicePresentation /></h1>
                        <h2 className="h2 m-4">I'm Mankaran Singh,a trained Full-Stack Developer</h2>
                        <p className="small m-4"> A recent graduate with a solid academic foundation, boasting an impressive
                            8.31 CGPA.

                            I am good in HTML5, CSS3, Java-Script, Bootstrap, React for elegant front-end designs and utilizing
                            JAVA,Python, MySql to create robust an efficient back-end-solutions
                            <strong> THANK YOU !.</strong>
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}
