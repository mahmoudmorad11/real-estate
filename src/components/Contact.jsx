import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bd07919b-3109-4a2e-a311-915d2f5db2ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Send Message");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult();
    }
  };

  return (
    <div className="text-center py-8 px-12">
      <div className="flex flex-col items-center mb-16">
        <h2 className="font-bold text-2xl sm:text-4xl mb-3">
          Contact{" "}
          <span className="font-light underline underline-offset-4">Us</span>
        </h2>
        <p className="text-gray-600 max-w-sm">
          Ready to make a move? Let&rsquo;s build your future together
        </p>
      </div>
      <div className="flex flex-col max-w-2xl mx-auto">
        <form
          onSubmit={onSubmit}
          className="flex w-full justify-between gap-x-8 gap-y-4 flex-col md:flex-row md:flex-wrap"
        >
          <div className="flex flex-col items-start gap-2 flex-1">
            <label htmlFor="name" className="font-medium">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your Name"
              className="border-2 border-gray-500 py-2 px-4 rounded-md w-full focus:outline-none focus:border-none focus:ring-3 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <label htmlFor="email" className="font-medium">
              Your Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email Address"
              className="border-2 border-gray-500 py-2 px-4 rounded-md w-full focus:outline-none focus:border-none focus:ring-3 focus:ring-blue-400"
              required
            />
          </div>
          {/* ----- */}
          <div className="w-full flex flex-col">
            <label htmlFor="message" className="text-left mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message"
              className="w-full h-40 border-2 border-gray-500 py-2 px-4 rounded-md focus:border-none focus:ring-3 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-[200px] bg-blue-700 text-white mx-auto py-2 cursor-pointer rounded-md hover:bg-blue-800 duration-200 "
          >
            {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
