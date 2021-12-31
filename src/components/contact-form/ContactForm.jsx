import { useContext, useRef, useState } from "react";
import "./contactForm.css";
import { sendForm } from "emailjs-com";
import { ThemeContext } from "../../context/context";

const ContactForm = () => {
  const formRef = useRef();
  const [msg, setMsg] = useState("");

  const { state } = useContext(ThemeContext);
  const { darkMode } = state;

  const inputStyle = {
    backgroundColor: darkMode && "#333",
  };

  const msgStyle = {
    color: darkMode ? "white" : "black",
  };

  const setMsgFor5Sec = (msg) => {
    msg && setMsg(msg);

    setTimeout(() => {
      setMsg("");
    }, 5000);
  };

  const emailHandler = (response) => {
    const { status } = response;

    status === 200 && setMsgFor5Sec("Thank you! will respond soon");
    status === 400 && setMsgFor5Sec("Something went wrong :(");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const emailServiceId = "service_a8nprzc";
    const emailTemplateId = "template_ipryzs8";
    const formData = formRef.current;
    const emailUserId = "user_e4OEbnrrlCSDj5tDIoszO";

    sendForm(emailServiceId, emailTemplateId, formData, emailUserId).then(
      emailHandler
    );
  };

  return (
    <form ref={formRef} onSubmit={submitHandler}>
      <input
        type="text"
        style={inputStyle}
        autoComplete="off"
        placeholder="Your Name"
        name="username"
        id="username"
        required
      />
      <input
        type="text"
        style={inputStyle}
        autoComplete="off"
        placeholder="Regarding..."
        name="subject"
        id="subject"
        required
      />
      <input
        type="email"
        style={inputStyle}
        autoComplete="off"
        placeholder="Your Email"
        name="useremail"
        id="useremail"
        required
      />
      <textarea
        style={inputStyle}
        rows="5"
        autoComplete="off"
        placeholder="Message if anything"
        name="message"
        required
      />
      <button>Submit</button>
      <p style={msgStyle}>{msg}</p>
    </form>
  );
};

export default ContactForm;
