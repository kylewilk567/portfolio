import React from "react";
import InputField from "./InputField";

const ContactForm = () => {
  // TODO: Add thank you page

  return (
    <div className="shadow-[0_3px_0_#ddd] brand-nav-bg-color rounded-md overflow-hidden flex flex-col p-8 w-full">
      <form
        className="flex flex-col gap-4"
        action="https://formsubmit.co/kylewilk@umich.edu"
        method="POST"
      >
        <InputField
          text="Name"
          isInput={true}
          type="text"
          required={"required"}
          name="name"
          className="w-full sm:w-1/2 min-w-[180px]"
        />
        <InputField
          text="Email"
          isInput={true}
          type="email"
          required={"required"}
          name="email"
          className="w-full sm:w-1/2 min-w-[180px]"
        />
        <InputField
          text="Subject"
          isInput={true}
          type="text"
          required={"required"}
          name="_subject"
          className="w-full min-w-[180px]"
        />
        <InputField
          text="Message"
          isInput={false}
          required={"required"}
          name="message"
          className="w-full min-w-[180px]"
        />

        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you! Kyle will respond back soon."
        ></input>
        <input type="hidden" name="_next" value="https://google.com"></input>
        <button className="btn w-32" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
