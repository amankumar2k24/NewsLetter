import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FooterBottomLinks,
  FooterCategoriesColumn1,
  FooterCategoriesColumn2,
  FooterSocialLinks,
} from "../data/data";

const Footer = () => {
  return (
    <footer className="bg-primaryBlue text-white py-12 px-16">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col space-y-4">
          <Link to="#" className="text-white">
            हमारे बारे में ↗
          </Link>
          <div className="flex space-x-4 gap-4">
            {FooterSocialLinks?.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className="text-gray-300 hover:text-gray-100"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex space-x-16">
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold">श्रेणियाँ</h3>
            {FooterCategoriesColumn1?.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="hover:underline"
              >
                {category.text}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-bold invisible">.</h3>
            {FooterCategoriesColumn2?.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="hover:underline"
              >
                {category.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-8">
        <p>©2024 All Rights Reserved</p>
        <div className="flex space-x-2">
          {FooterBottomLinks?.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className="hover:underline px-4 relative after:content-[''] after:absolute after:w-[12%] after:h-[2px] after:bg-white after:-right-1 after:top-[10px] after:rotate-90"
            >
              {link.text}
            </Link>
          ))}
          <Link to="#" className="hover:underline px-4">
            SITEMAP
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
