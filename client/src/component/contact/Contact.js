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
    <div className=" mt-6 max-w-full" id="contact">
      <h1 className="heading">Contact Us</h1>
      <div className="sm:grid-cols-2 grid grid-cols-1 mt-5 gap-9 sm:mx-5">
        <form
          action="https://formspree.io/f/myyarkgy"
          method="POST"
          className="w-full gap-2 flex-col"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            className="border-[3px] text-mygrey bg-mybg w-full rounded-3xl border-mytheme border-xl p-[.4rem]"
            name="name"
            value={Val.username}
            onChange={handleInput}
            type="text"
            placeholder="Full name"
            required
          />
          <input
            className="border-[3px] text-mygrey bg-mybg w-full rounded-3xl border-mytheme border-xl p-[.4rem]"
            name="email"
            value={Val.email}
            onChange={handleInput}
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="border-[3px] text-mygrey bg-mybg w-full rounded-3xl border-mytheme border-xl p-[.4rem]"
            name="phone"
            value={Val.phone}
            onChange={handleInput}
            type="ph"
            placeholder="Contact No."
            required
          />
          <input
            className="border-[3px] text-mygrey bg-mybg w-full rounded-3xl border-mytheme border-xl p-[.4rem]"
            name="subject"
            value={Val.subject}
            onChange={handleInput}
            type="text"
            placeholder="write the subject (Optional) "
          />

          <textarea
            className="border-[3px] text-mygrey bg-mybg w-full rounded-2xl border-mytheme border-xl p-2"
            name="description"
            onChange={handleInput}
            value={Val.description}
            type="text"
            placeholder="Write you message..."
          ></textarea>
          <button className="border-[3px]  w-full rounded-2xl border-mytheme border-xl p-2 bg-mytheme">
            Send
          </button>
        </form>
        <div className="socialMedia mt-4 mx-2">
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
