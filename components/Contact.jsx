import React from "react";
import { useTheme } from "next-themes";
import Header from "./Header";
import InputField from "./form/InputField";
import ContactForm from "./form/ContactForm";

const Contact = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mx-auto">
      <Header title="Connect With Me" />
      <div className="lg:hidden">
        <p className="my-4 text-2xl font-semibold text-center">
          Share your{" "}
          <span className="text-pink-500 hover:text-pink-700">thoughts</span>{" "}
          and{" "}
          <span className="text-yellow-500 hover:text-yellow-700">
            inquiries
          </span>
          .
        </p>
      </div>

      <div className="hidden lg:block 2xl:hidden">
        <p className="my-4 text-2xl font-semibold text-center">
          <span className="text-purple-600 hover:text-purple-800">
            Let&apos;s
          </span>{" "}
          chat —{" "}
          <span className="text-pink-500 hover:text-pink-700">questions</span>,{" "}
          <span className="text-yellow-500 hover:text-yellow-700">ideas</span>,
          or just{" "}
          <span className="text-green-500 hover:text-green-700">
            a friendly hello
          </span>
          .
        </p>
      </div>

      <div className="hidden 2xl:block">
        <p className="my-4 text-2xl font-medium text-center">
          <span className="text-purple-600 hover:text-purple-800">
            Let&apos;s
          </span>{" "}
          have a{" "}
          <span className="text-blue-500 hover:text-blue-700">
            conversation{" "}
          </span>
          —{" "}
          <span className="text-pink-500 hover:text-pink-700">
            share your thoughts
          </span>
          ,{" "}
          <span className="text-yellow-500 hover:text-yellow-700">
            ask me anything
          </span>
          , or just{" "}
          <span className="text-green-500 hover:text-green-700">
            drop a cheerful hello
          </span>
          !
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
