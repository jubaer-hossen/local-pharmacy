import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact mb-5">
            <form className="bg-primary background  py-5 m-5 mx-auto w-75">
                <div className="w-50 mx-auto my-5 bg-light p-5 rounded">
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
                        <textarea
                            rows="4"
                            cols="52"
                            name="comment"
                            form="usrform"
                        >
                            Hey... say something!
                        </textarea>
                    </div>

                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
