import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full overflow-hidden p-14 md:px-20 lg:px-32"
      id="About"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-4">
        About
        <span className="font-light underline underline-offset-4 under">
          Our Brand
        </span>
      </h2>
      <p className="text-gray-500 text-center max-w-80 mb-8">
        Passionate About Properties, Dedicated To Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start text-gray-600 max-md:mt-10 text-center md:text-left">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full">
            <div>
              <h3 className="text-4xl font-bold text-gray-800">10+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">12+</h3>
              <p>Projects Compoleted</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">20+</h3>
              <p>Sq. Ft. Delivered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">25+</h3>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            itaque aut culpa suscipit facilis, doloribus sunt maiores adipisci
            eveniet quae, perspiciatis distinctio recusandae omnis
            necessitatibus. Iusto ipsam voluptatibus nisi magnam!
          </p>
          <button className="bg-blue-700 text-white py-2 px-8 rounded cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
