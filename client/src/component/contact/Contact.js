import React, { useState } from "react";
import { MdEmail, MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import { SiLinkedin, SiInstagram, SiFacebook, SiGithub } from "react-icons/si";

const Contact = () => {
  const [Val, setVal] = useState({
    username: "",
    email: "",
    description: "",
  });

  const handleInput = (e) => {
    const inputName = e.target.name;
    setVal(inputName);
  };
  return (
    <div className="contact" id="contact">
      <h1 className="heading">Contact Us</h1>
      <div className="contact_content">
        <form
          action="https://formspree.io/f/myyarkgy"
          method="POST"
          className="contact-from"
        >
          <input
            name="name"
            value={Val.username}
            onChange={handleInput}
            type="text"
            placeholder="Full name"
            required
          />
          <input
            name="email"
            value={Val.email}
            onChange={handleInput}
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="phone"
            value={Val.phone}
            onChange={handleInput}
            type="ph"
            placeholder="Contact No."
            required
          />
          <input
            name="subject"
            value={Val.subject}
            onChange={handleInput}
            type="text"
            placeholder="write the subject (Optional) "
          />

          <textarea
            name="description"
            onChange={handleInput}
            value={Val.description}
            type="text"
            placeholder="Write you message..."
          ></textarea>
          <button>Send</button>
        </form>
        <div className="socialMedia m">
          <div className="socialMedia_item">
            <MdEmail />
            <p>zaryabsheikh0@gmail.com</p>
          </div>
          <div className="socialMedia_item">
            <MdPhoneInTalk />
            <p>+923046292195</p>
          </div>
          <div className="socialMedia_item">
            <MdLocationOn />
            <p> Lahore, Pakistan</p>
          </div>

          <div className="socialMedia_personal mt-4">
            <a href="https://www.linkedin.com/in/m-zaryab-ikram-812a05156/">
              <SiLinkedin />
            </a>
            <a href="https://www.instagram.com/zaryabxheikh/?igshid=MzRlODBiNWFlZA==">
              <SiInstagram />
            </a>
            <a href="https://www.facebook.com/zaryab.sheikh.1232">
              <SiFacebook />
            </a>
            <a href="https://github.com/zaryab2212">
              <SiGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
