import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { GoCommentDiscussion } from "react-icons/go";
import { IconContext } from 'react-icons';


export default function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_truk9sp', 'template_qstxox4', form.current, {
            publicKey: '_HUv3H6IyDOzSJ22A',
        })
            .then(
                () => {
                    alert('Message send Successfully');
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
        e.target.reset();
    }
    return (
        <>
            {/* contact form */}
            <div className="container shadow mt-5 mb-5 p-2 " >
                <h1 className="h2 m-3 p-3">
                    <IconContext.Provider value={{ size: "4rem", color: "black", className: "icons" }}>
                        <GoCommentDiscussion />G E T - IN - T O U C H
                    </IconContext.Provider>
                </h1>
                <div className="row m-2 justify-content-center align-items-center">
                    <div className="col-lg-7  shadow m-2 p-5 rounded">
                        <form className="border bg-light" ref={form} onSubmit={sendEmail}>
                            <div className="form-group row justify-content-center m-3">
                                <div className="col-sm-11 m-3">
                                    {/* value={formData.name} onChange={handleChange} */}
                                    <input type="text" className="form-control form-control-lg" id="name" name='name' placeholder="Name  ....."></input>
                                </div>
                            </div>
                            <div className="form-group row justify-content-center m-3">
                                <div className="col-sm-11 m-3">
                                    {/* value={formData.email} onChange={handleChange} */}
                                    <input type="email" className="form-control form-control-lg " id="email" name='email' placeholder="Email  ....."></input>
                                </div>
                            </div>
                            <div className="form-group row justify-content-center m-3">
                                <div className="col-sm-11 m-3">
                                    {/* value={formData.subject} onChange={handleChange} */}
                                    <input type="text" className="form-control form-control-lg " id="subject" name='subject' placeholder="Subject  ....."></input>
                                </div>
                            </div>
                            <div className="form-group row justify-content-center m-3">
                                <div className="col-sm-11 m-3">
                                    {/* value={text} onChange={handleText} */}
                                    <textarea col="4" rows="4" className="form-control " id="text" name='message'
                                        placeholder="Leave a Message......"></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                {/* onClick={handleSubmit}  */}
                                <button type="submit" className="btn w-50 m-4 btn-light border bg-warning" id="button"><b>Send Message</b></button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    );
}

