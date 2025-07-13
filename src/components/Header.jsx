import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen flex items-center w-full overflow-hidden mb-4 bg-center bg-cover"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Home"
    >
      <Navbar />
      <div className="container w-full text-center text-white mx-auto py-4">
        <h1 className="text-5xl sm:text-6xl md:text-[82px] max-w-3xl font-semibold mx-auto ">
          Explore Homes That Fit Your Dreams
        </h1>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border border-white rounded px-8 py-3">
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-500 border border-blue-500 rounded px-8 py-3"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
