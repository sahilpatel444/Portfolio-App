import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaFacebookSquare } from "react-icons/fa";
import "./Contact.css";

// import Rotate from 'react-reveal/Rotate'
import Zoom from "react-reveal/Zoom";

// import LightSpeed from 'react-reveal/LightSpeed'
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide All Fields");
      }
      const res = await axios.post(
        `https://sahil-portfolio-server.vercel.app/api/v1/portfolio/sendEmail`,
        {
          name,
          email,
          msg,
        }
      );
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Zoom>
        <div className="contact" id="contact">
          <div className="card card0 border-0">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                  <div className="row border-line">
                    <img
                      src="image/contactus.jpg"
                      alt="ocontact"
                      className="image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <>
                  <div className="card2 d-flex card border-0 px-4 py-5">
                    <div className="row">
                      <div className="row">
                        <h6 className="link-icon">
                          Contact With
                          <><a href="https://www.linkedin.com/in/sahil-vaddoriya">
                            
                          <CiLinkedin color="blue" size={30} className="ms-2" />
                          </a>
                          </>
                          <>
                            <a href="https://github.com/sahilpatel444">
                              <FaGithub size={30} className="ms-2" />
                            </a>
                          </>
                          <FaFacebookSquare
                            color="blue"
                            size={30}
                            className="ms-2"
                          />
                        </h6>
                      </div>

                      <div className="row px-3 mb-4">
                        <div className="line" />
                        <small className="or text-center">OR</small>
                        <div className="line" />
                      </div>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Write your Name"
                          className="mb-3"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Write your Email Address"
                          className="mb-3"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="msg"
                          placeholder="Write your message"
                          className="mb-3"
                          value={msg}
                          onChange={(e) => setMsg(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <Zoom>
                          <button className="button" onClick={handleSubmit}>
                            SEND MESSAGE
                          </button>
                        </Zoom>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default Contact;
