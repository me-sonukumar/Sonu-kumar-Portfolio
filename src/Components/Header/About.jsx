import React from "react";
import SocialMedia from "../../miniComponent/SocialMedia";

const About = () => {
  return (
    <div className="md:flex justify-center items-center my-[150px] ">
      <div className="container mx-auto xs:px-5 lg:px-0  md:flex justify-between ">
        <div className="rounded xs:mb-11">
          <img
            src="../public/images/about-img.jpeg"
            alt="About-Image"
            className="rounded-3xl md:w-[400px] about-img "
          />
        </div>
        <div className="right-part md:w-1/2 ">
          <h3 className="font-bold text-xl mb-2">about me.</h3>
          <h2 className="font-bold text-2xl mb-3 text-[#f44236]">
            A dedicated Front-end Developer
          </h2>
          <p className="text-zinc-500">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
          <div className="mt-5">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
