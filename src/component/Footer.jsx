import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Social Links Array
  const socialLinks = [
    { id: "1", href: "#", icon: <FaFacebookF size={20} /> },
    { id: "2", href: "#", icon: <FaInstagram size={20} /> },
    { id: "3", href: "#", icon: <BsTwitterX size={20} /> },
    { id: "4", href: "#", icon: <AiOutlineYoutube size={20} /> },
  ];

  // Categories (Right Section) Links Array
  const categoriesColumn1 = [
    { id: "1", text: "लेटेस्ट", href: "#" },
    { id: "2", text: "देश-विदेश", href: "#" },
    { id: "3", text: "विजुअल स्टोरीज़", href: "#" },
    { id: "4", text: "स्पोर्ट्स", href: "#" },
    { id: "5", text: "एंटरटेनमेंट", href: "#" },
  ];

  const categoriesColumn2 = [
    { id: "6", text: "टेक्नोलॉजी", href: "#" },
    { id: "7", text: "पड़ताल", href: "#" },
    { id: "8", text: "बिज़नेस", href: "#" },
    { id: "9", text: "रंगरूट", href: "#" },
    { id: "10", text: "ओलंपिक 2024", href: "#" },
  ];

  // Footer Bottom Links Array
  const bottomLinks = [
    { id: "1", text: "CONTACT US", href: "#" },
    { id: "2", text: "PRIVACY POLICY", href: "#" },
    { id: "3", text: "COOKIE POLICY", href: "#" },
    { id: "4", text: "TERMS OF USE", href: "#" },
  ];

  return (
    <footer className="bg-primaryBlue text-white py-12 px-16">
      <div className="container mx-auto flex justify-between">
        {/* Left section */}
        <div className="flex flex-col space-y-4">
          <Link to="#" className="text-white">
            हमारे बारे में ↗
          </Link>
          <div className="flex space-x-4 gap-4">
            {/* Social Icons */}
            {socialLinks.map((link) => (
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
        {/* Right section */}
        <div className="flex space-x-16">
          {/* Categories Column 1 */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold">श्रेणियाँ</h3>
            {categoriesColumn1.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="hover:underline"
              >
                {category.text}
              </Link>
            ))}
          </div>

          {/* Categories Column 2 */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold invisible">.</h3> {/* For alignment */}
            {categoriesColumn2.map((category) => (
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

      {/* Bottom Links */}
      <div className="flex items-center justify-between w-full mt-8">
        <p>©2024 All Rights Reserved</p>
        <div className="flex space-x-2">
          {bottomLinks.map((link) => (
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
