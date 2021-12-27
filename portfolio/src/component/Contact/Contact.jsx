import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
function Contact() {
  const formRef = useRef();
  const [done,setDone] =useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_90c8n87",
        "template_0nyscbo",
        formRef.current,
        "user_0RLFkaeQaGS91iSBawFld"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="c-bg"></div>
      <h2 className="c-title c-main-title">
        {" "}
        <span className="c-firstSpan"> Lets' Discuss </span>
        <span className="c-secondSpan"> About Your Project Together</span>
      </h2>
      <div className="c-wrapper">
        <div className="c-left">
          <h2 className="c-title">
            {" "}
            <span className="c-firstSpan"> GET CONNECTED WITH</span>
          </h2>
          {/* <span className="c-secondSpan"> About Your Project Together</span></h2> */}
          <div className="c-info">
            <div className="c-info-item">
              <i className="icon fas fa-phone-alt"></i>
              +977
            </div>
            <div className="c-info-item">
              <i className="icon fas fa-mail-bulk"></i>
              santehero@gmail.com
            </div>
            <div className="c-info-item">
              <i className=" icon fas fa-map-marked-alt"></i>
              santehero@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="right-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
            recusandae iusto enim nobis quo consequatur, id, tempore, temporibus
            suscipit maxime perferendis expedita. Culpa, molestias fuga.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} action="">
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>

            <button> Submit</button>
            {done && "Sent Successfully"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
