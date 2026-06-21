import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets"

const About = () => {
  return (
    <div className="bg-[#F9F5EF]">

      {/* Heading */}

      <div className="text-center text-3xl pt-12">
        <Title text1={"ABOUT"} text2={" MIRAYA"} />
      </div>

      {/* Main Section */}

      <div className="my-16 flex flex-col lg:flex-row gap-12 items-center">

        {/* Image */}

        <div className="lg:w-1/2">
          <img
            src={assets.aboutus_img}
            alt="Miraya Bridal Collection"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}

        <div className="lg:w-1/2 text-[#5A4634]">

          <h2 className="text-4xl font-cinzel mb-6 text-[#7A1E2C]">
            Where Heritage Meets Luxury
          </h2>

          <p className="leading-8 text-lg mb-6">
            Miraya is a celebration of timeless Indian elegance.
            Inspired by royal palaces, intricate craftsmanship,
            and centuries of cultural heritage, every creation is
            designed to make women feel extraordinary.
          </p>

          <p className="leading-8 text-lg mb-6">
            From handcrafted bridal jewelry to statement ethnic
            ensembles, our collections blend traditional artistry
            with modern sophistication. Each piece reflects
            meticulous attention to detail, luxurious materials,
            and a passion for preserving India's rich design legacy.
          </p>

          <p className="leading-8 text-lg">
            At Miraya, we believe luxury is more than fashion —
            it is an experience, a story, and a reflection of the
            confidence and grace every woman carries within herself.
          </p>

        </div>

      </div>

      {/* Brand Values */}

      <div className="grid md:grid-cols-3 gap-6 pb-20">

        <div className="bg-white border border-[#E8D8B5] p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-[#7A1E2C] mb-3">
            Royal Inspiration
          </h3>

          <p className="text-[#8B7355]">
            Designs inspired by India's royal heritage,
            palaces, and timeless bridal traditions.
          </p>
        </div>

        <div className="bg-white border border-[#E8D8B5] p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-[#7A1E2C] mb-3">
            Handcrafted Excellence
          </h3>

          <p className="text-[#8B7355]">
            Every piece is carefully crafted with
            exceptional attention to detail and quality.
          </p>
        </div>

        <div className="bg-white border border-[#E8D8B5] p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-[#7A1E2C] mb-3">
            Timeless Elegance
          </h3>

          <p className="text-[#8B7355]">
            Created for women who appreciate
            sophistication, luxury, and tradition.
          </p>
        </div>

      </div>

    </div>
  );
};

export default About;