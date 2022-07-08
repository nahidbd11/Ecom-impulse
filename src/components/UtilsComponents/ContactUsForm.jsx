import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../../css/Contact.css";
import axios from "axios";
import SpinLoader from "../../utilsComponent/spinLoader/SpinLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUsForm() {
    const notify = () => toast();
    const [fullName, setFullName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);

    const apiEndPoint = process.env.MIX_REACT_APP_API_URL + "/send-enquiry";

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            full_name: fullName,
            contact_no: contactNo,
            email,
            message,
            type: 1,
        };

        setError(null);
        setIsLoading(true);
        setResult(null);

        fetch(apiEndPoint, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" },
        })
            .then((response) => response.json())
            .then((json) => {
                toast.success("Thank You! We will get back to you soon.");
                setFullName("");
                setContactNo("");
                setEmail("");
                setMessage("");
            })
            .catch((err) => toast.warn("Please try again !"));
        setIsLoading(false);
        notify();
    }

    return (
        <section class="contact1">
            <div class="content_box_100">
                <div class="container">
                    <div class="row no-gutters">
                        <div class="col-lg-5">
                            <div class="contact1__info text-center">
                                <div>
                                    <div class="contact1__thumb-wrapper">
                                        <div class="contact1__thumb">
                                            <img
                                                src="web_assets/img/png-icon/png-icon-20.png"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                    <h3>Emergency call</h3>
                                    <Link to="tel:10644">
                                        <h4>10644</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="contact_page2__form">
                                <h3>Write to US</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-20">
                                        <div className="col-xl-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                placeholder="Full name *"
                                                value={fullName}
                                                onChange={(e) =>
                                                    setFullName(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="col-xl-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="phone-number"
                                                placeholder="Your phone *"
                                                value={contactNo}
                                                onChange={(e) =>
                                                    setContactNo(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-xl-12">
                                            <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                placeholder="Your email *"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="col-xl-12">
                                            <textarea
                                                className="form-control"
                                                name="subject"
                                                placeholder="Your Message .  .  .  .  .  ."
                                                value={message}
                                                onChange={(e) =>
                                                    setMessage(e.target.value)
                                                }
                                            />
                                        </div>
                                        <ToastContainer position="top-center" />
                                        <div className="col-xl-12">
                                            <div className="row">
                                                <button
                                                    type="submit"
                                                    className="btn8"
                                                    disabled={isLoading}
                                                >
                                                    Send Us
                                                </button>

                                                {isLoading && (
                                                    <SpinLoader ratio={50} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
