import { useRef, useState } from "react";
import "./contactForm.css";
import { sendForm } from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();
  const [msg, setMsg] = useState("");

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
        autoComplete="off"
        placeholder="Your Name"
        name="username"
        id="username"
        required
      />
      <input
        type="text"
        autoComplete="off"
        placeholder="Regarding..."
        name="subject"
        id="subject"
        required
      />
      <input
        type="email"
        autoComplete="off"
        placeholder="Your Email"
        name="useremail"
        id="useremail"
        required
      />
      <textarea
        rows="5"
        autoComplete="off"
        placeholder="Message if anything"
        name="message"
        required
      />
      <button>Submit</button>
      <p>{msg}</p>
    </form>
  );
};

export default ContactForm;
