import React from 'react'
import { IconContext } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { BsFillTrophyFill } from "react-icons/bs";


export default function Skills() {
    return (
        <>
            <div className="container shadow mt-5">
                <h1 className="h2 p-3 m-3">
                    <IconContext.Provider value={{ size: "4rem", color: "black", className: "icons" }}>
                        <BsFillTrophyFill /> T E C H N I C A L - S K I L L S E T
                    </IconContext.Provider>
                </h1>
                <div className="divider"></div>
                <div className="row justify-content-around">
                    <div className="col-sm-5 m-4 shadow">
                        <h6 className="h6 m-4">
                            <IconContext.Provider value={{ size: "1.5rem", color: "blue" }}>
                                HTML <FaHtml5 />
                            </IconContext.Provider>
                        </h6>
                        <div className="progress m-3">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                style={{ width: '95%' }}>95%</div>
                        </div>
                        <h6 className="h6 m-4">
                            <IconContext.Provider value={{ size: "1.5rem", color: "green" }}>
                                CSS<FaCss3Alt />
                            </IconContext.Provider>

                        </h6>
                        <div className="progress m-3">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                role="progressbar" style={{ width: '90%' }}>90%</div>
                        </div>
                        <h6 className="h6 m-4">
                            <IconContext.Provider value={{ size: "1.5rem", color: "skyblue" }}>
                                REACT<FaReact />
                            </IconContext.Provider>

                        </h6>
                        <div className="progress m-3">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                                style={{ width: '70%' }}>70%</div>
                        </div>
                        <h6 className="h6 m-4">
                            <IconContext.Provider value={{ size: "1.5rem", color: "green" }}>
                                Bootstrap<FaBootstrap />
                            </IconContext.Provider>
                        </h6>
                        <div className="progress m-3">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                role="progressbar" style={{ width: '90%' }}>90%</div>
                        </div>
                    </div>
                    <div className="col-sm-5 m-4 shadow">
                        <h6 className="h6 m-4">
                            <IconContext.Provider value={{ size: "1.5rem", color: "blue" }}>
                                JAVA<FaJava />
                            </IconContext.Provider>
                        </h6>
                        <div className="progress m-4">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                style={{ width: '85%' }}>90%</div>
                        </div>

                        <h6 className="h6 m-4">
                            <IconContext.Provider value={{ size: "1.5rem", color: "black" }}>
                                MySql<GrMysql />
                            </IconContext.Provider>
                        </h6>
                        <div className="progress m-3">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar"
                                style={{ width: '80%' }}>80%</div>
                        </div>
                        <h6 className="h6 m-4">
                            <IconContext.Provider value={{ size: "1.5rem", color: "warning" }}>
                                Java-Script<TbBrandJavascript />
                            </IconContext.Provider>
                        </h6>
                        <div className="progress m-3">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
                                style={{ width: '80%' }}>80%</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
