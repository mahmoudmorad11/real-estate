import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-4 md:px-20 bg-gray-900 py-7">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 items-start">
        <div>
          <img src={assets.logo_dark} alt="logo" className="m-0 p-0" />
          <p className="text-gray-400 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut
            suscipit harum iure in, qui tempora est reiciendis! Repellat ullam
            facere quos explicabo ab obcaecati harum libero alias consequatur
            quaerat
          </p>
        </div>
        <div className="w-full md:ml-8">
          <h3 className="font-bold text-white text-xl mb-3">Company</h3>
          <ul>
            {["Home", "About Us", "Contact Us", "Privacy Policy"].map(
              (item, index) => (
                <li className="my-2" key={index}>
                  <a href={`#${item}`} className="text-gray-400 mt-3">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white text-xl mb-3">
            Subscribe To Our Newsletter
          </h3>
          <p className="text-gray-400 mt-3">
            The Newest News, articles, and resources. Sent to your inbox weekly
          </p>
          <div className="w-full flex flex-col sm:flex-row mt-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 min-w-0 bg-gray-800 placeholder:text-white p-3 focus:outline-none text-white"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto max-sm:mt-2 bg-blue-800 p-3 cursor-pointer "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
