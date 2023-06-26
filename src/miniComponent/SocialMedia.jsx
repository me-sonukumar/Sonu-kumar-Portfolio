import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <div className=" flex gap-3 text-[30px] ">
        <a
          href="https://github.com/Sonukumar-singh"
          target="_blank"
          className="hover:animate-bounce"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.linkedin.com/in/sonukumar-singh/"
          target="_blank"
          className="hover:animate-bounce"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sonukumar-singh/"
          target="_blank"
          className="hover:animate-bounce text-[via-{color}] "
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/sonukumar-singh/"
          target="_blank"
          className="hover:animate-bounce"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
