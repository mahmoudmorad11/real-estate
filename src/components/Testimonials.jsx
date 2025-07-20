import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="mx-auto container p-10 overflow-hidden" id="Testimonials">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-2xl sm:text-4xl mb-4">
          Customer
          <span className="font-light underline underline-offset-4 under">
            Testimonials
          </span>
        </h1>
        <p className="max-w-80 text-center text-gray-600">
          Real stories from those who found homes with us
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[360px] py-8 px-12 shadow-lg flex flex-col items-center justify-start text-center"
          >
            <img
              className="w-20 h-20 rounded"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <h3 className="font-bold text-gray-700 text-xl">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
            <div className="flex my-3">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img src={assets.star_icon} alt="star" key={index} />
              ))}
            </div>
            <p className="text-gray-600 px-0">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
