import React from 'react'
import { IconContext } from 'react-icons';
import { FcIdea, FcNightPortrait, FcNews } from "react-icons/fc";
import { SiMusicbrainz } from "react-icons/si";



export default function Project() {
    return (
        <>
            <div className='container shadow mt-5 mb-5 p-2'>
                <h1 className="h2 m-4 p-3 ">
                    <IconContext.Provider value={{ size: "4rem", className: "icons" }}>
                        <FcIdea /> P R O J E C T S
                    </IconContext.Provider>
                </h1>
                <div className="row my-3 justify-content-around">
                    <div className="col-9 shadow-lg p-4">
                        <div className="card mb-5 border-0">
                            <div className="row">
                                <div className="col-lg-4">
                                    <IconContext.Provider value={{ size: "13rem", className: "icons" }}>
                                        <SiMusicbrainz />
                                    </IconContext.Provider>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-decoration-underline">Music Waves</h5>
                                        <h6 className="card-text h6">Created a music streaming app MusicWaves .
                                            Utilized Spring Boot for backend development, integrating with MySQL database for data management.
                                            Developed the frontend using React library for interactive user experience.
                                        </h6>
                                        <h6 className="card-text"><small className="text-body-secondary">2024</small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3 border-0" >
                            <div className="row">
                                <div className="col-lg-4">
                                    <IconContext.Provider value={{ size: "13rem", className: "icons" }}>
                                        <FcNews />
                                    </IconContext.Provider>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-decoration-underline">Word Counter</h5>
                                        <h6 className="card-text h6">Created a dynamic personal portfolio utilizing HTML, CSS, Bootstrap, and React.
                                            Effectively presented personal projects, skills, and contact information in a clear and organized manner.
                                        </h6>
                                        <h6 className="card-text"><small className="text-body-secondary">2023-2024</small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 border-0">
                            <div className="row">
                                <div className="col-lg-4">
                                    <IconContext.Provider value={{ size: "13rem", className: "icons" }}>
                                        <FcNightPortrait />
                                    </IconContext.Provider>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-decoration-underline">Personal-Portfolio</h5>
                                        <h6 className="card-text h6">Created a dynamic personal portfolio utilizing HTML, CSS, Bootstrap, and React.
                                            Effectively presented personal projects, skills, and contact information in a clear and organized manner.
                                        </h6>
                                        <h6 className="card-text"><small className="text-body-secondary">2023-2024</small></h6>
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
