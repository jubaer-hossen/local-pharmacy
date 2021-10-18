import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <form className="bg-primary mx-auto w-75 p-5 text-white mt-5">
                <div className="rounded">
                    <h3 className="text-center">Contact Us</h3>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Your Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Your Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <br />
                    <div>
                        <textarea name="comment" form="usrform">
                            say something...
                        </textarea>
                    </div>

                    <div className="text-center pb-3 mt-4">
                        <button type="submit" className="btn btn-danger w-50">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
