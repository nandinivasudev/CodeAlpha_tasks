import React from "react";
import Title from "../components/Title";
import contactImg from "../assets/contact-img.jpeg";

const Contact = () => {
  return (
    <div className="bg-[#F9F5EF]">

      {/* Heading */}

      <div className="text-center text-3xl pt-12">
        <Title text1={"CONTACT"} text2={" MIRAYA"} />
      </div>

      {/* Main Section */}

      <div className="my-16 flex flex-col lg:flex-row gap-12 items-center">

        {/* Image */}

        <div className="lg:w-1/2">
          <img
            src={contactImg}
            alt="Miraya Jewelry"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Details */}

        <div className="lg:w-1/2 text-[#5A4634]">

          <h2 className="text-4xl font-cinzel text-[#7A1E2C] mb-6">
            Get In Touch
          </h2>

          <p className="leading-8 text-lg mb-8">
            We'd love to hear from you. Whether you're looking
            for bridal styling advice, product assistance, or
            custom jewelry recommendations, our team is here
            to help you find the perfect Miraya piece.
          </p>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-[#7A1E2C] text-xl">
                Address
              </h3>
              <p className="text-[#8B7355] mt-2">
                Miraya Luxury Boutique
                <br />
                New Delhi, India
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#7A1E2C] text-xl">
                Phone
              </h3>
              <p className="text-[#8B7355] mt-2">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#7A1E2C] text-xl">
                Email
              </h3>
              <p className="text-[#8B7355] mt-2">
                support@miraya.com
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Contact Form */}

      <div className="max-w-4xl mx-auto pb-20">

        <div className="bg-white border border-[#E8D8B5] rounded-xl p-8 shadow-sm">

          <h3 className="text-2xl text-[#7A1E2C] font-semibold mb-6 text-center">
            Send Us A Message
          </h3>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="border border-[#E8D8B5] rounded px-4 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-[#E8D8B5] rounded px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border border-[#E8D8B5] rounded px-4 py-3 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="border border-[#E8D8B5] rounded px-4 py-3 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="
                bg-[#7A1E2C]
                text-white
                py-3
                rounded
                hover:bg-[#611626]
                transition
              "
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;