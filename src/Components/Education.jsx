import React from 'react'
import { IconContext } from 'react-icons';
import { FcGraduationCap, FcReadingEbook } from "react-icons/fc";

export default function Education() {
    return (
        <>
            <div className="container shadow mt-5 mb-5 p-2 ">
                <h1 className="h2 m-4 p-3">
                    <IconContext.Provider value={{ size: "4rem", className: "icons" }}>
                        <FcGraduationCap /> E D U C A T I O N
                    </IconContext.Provider>
                </h1>
                <div className="row m-3 justify-content-center align-items-center">
                    <div className="col-lg-11  shadow m-2 p-5 rounded">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <h4><strong>
                                            <IconContext.Provider value={{ size: "3rem" }}>
                                                <FcReadingEbook /> ---INTERNSHIP---
                                            </IconContext.Provider>
                                        </strong></h4>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">

                                        <h6><strong>*Intership, KodNest Technologies, Bangalore</strong></h6>
                                        <h6>*Software Full Stack Development Intern at KodNest, where i acquired practical skills in Software Development domain
                                            , contributing to real-world projects and learning directly from Industry Professionals.</h6>
                                        <pre>
                                            <h6 className='my-2'>*Key Skills Developed: </h6>
                                            <h6>  - Programming Languages: Java, Python, Java-Script.</h6>
                                            <h6>  - Web Development: HTML5, CSS3, Bootstrap.</h6>
                                            <h6>  - Frameworks and Library: Hibernate, Spring, Spring-Boot, React.js .</h6>
                                            <h6>  - Database Management: SQL, MySql.</h6>
                                            <h6>  - Tools: Postman, intellijIDEA, Eclipse(sts), Git&GitHub.</h6>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        <h4><strong>
                                            <IconContext.Provider value={{ size: "3rem" }}>
                                                <FcReadingEbook /> ---BACHELORE DEGREE OF COMPUTER APPLICATION---
                                            </IconContext.Provider>
                                        </strong></h4>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <pre>
                                            <h6><strong>*Bachelore of Computer Application</strong></h6>
                                            <h6>*IK.Gujral Punjab Technical University,Punjab</h6>
                                            <h6>*Graduated, July 2023</h6>
                                            <h6 className='my-2'>*Key Skills Developed: </h6>
                                            <h6>  - Programming Languages</h6>
                                            <h6>  - Software Development</h6>
                                            <h6>  - Database Management</h6>
                                            <h6>  - Web Development</h6>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <h4><strong>
                                            <IconContext.Provider value={{ size: "3rem" }}>
                                                <FcReadingEbook /> ---SENIOR SECONDARY EDUCATION---
                                            </IconContext.Provider>
                                        </strong></h4>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <pre>
                                            <h6><strong>*Punjab School Education Board,Punjab</strong></h6>
                                            <h6> *April 2019 - March-2020</h6>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                        <h4><strong>
                                            <IconContext.Provider value={{ size: "3rem" }}>
                                                <FcReadingEbook /> ---MATRICULATION---
                                            </IconContext.Provider>

                                        </strong></h4>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <pre>
                                            <h6><strong>*Punjab School Education Board,Punjab</strong></h6>
                                            <h6> *April 2018 - March-2019</h6>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
