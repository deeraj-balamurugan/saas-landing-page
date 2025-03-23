import React from "react";
import logo from "../assets/logosaas.png";
import { ReactComponent as Instagram } from "../assets/social-insta.svg?react";
import { ReactComponent as Linkedin } from "../assets/social-linkedin.svg?react";
import { ReactComponent as Pinterest } from "../assets/social-pin.svg?react";
import { ReactComponent as X } from "../assets/social-x.svg?react";
import { ReactComponent as Youtube } from "../assets/social-youtube.svg?react";

const Footer = () => {
  return (
    <footer className="bg-black text-sm text-[#BCBCBC] py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-1 before:inset-0 before:h-full before:blur-sm before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9D,#C2F0B1,#2FD8FE)] before:absolute">
          <img
            src={logo}
            height={40}
            width={40}
            alt="SaaS logo"
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Instagram />
          <Linkedin />
          <Pinterest />
          <X />
          <Youtube />
        </div>
        <p className="mt-6">
          &copy; 2025 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
