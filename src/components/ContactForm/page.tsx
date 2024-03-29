'use client'
import React, { useState } from "react";

const ContactForm = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 -600 -blue-700 focus:outline-none -blue-800"
          type="button"
          data-drawer-target="drawer-contact"
          data-drawer-show="drawer-contact"
          aria-controls="drawer-contact"
            onClick={() => setShow(!show)}
        >
          Show contact form
        </button>
      </div>

      <div
        id="drawer-contact"
        className={`${show ? 'fixed' : 'hidden'} top-0 left-0 z-40 h-screen p-4 overflow-y-auto w-[300px] bg-slate-300 tabIndex={-1}
        aria-labelledby="drawer-contact-label`}
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase -400"
        >
          <svg
            className="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
          Contact us
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-contact"
          aria-controls="drawer-contact"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center -gray-600 -white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <form className="mb-6 mt-5">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
              placeholder="test@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 -700 -600 -400  -blue-500 -blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 -600 -blue-700 focus:outline-none -blue-800 block"
          >
            Send message
          </button>
        </form>
        <p className="mb-2 text-sm text-gray-500 -400">
          <a href="#" className="hover:underline">
            adebayoalameen88@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
