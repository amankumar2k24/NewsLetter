import React from "react";
import { MdOutgoingMail, MdSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { navItems, socialLinks } from "../data/data";



const Navbar = () => {
  return (
    <header className="bg-primaryBlue text-white">
      <div className="container mx-auto flex justify-between items-center py-4 ">
        <div className="flex gap-4 flex-row px-12 ">
          {socialLinks?.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className="text-gray-300 hover:text-gray-100"
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-2 items-center pr-6">
          <MdOutgoingMail size={24} />
          <p className="font-500">न्यूज़लेटर यहाँ मिलेगा</p>
        </div>
      </div>
      <div className="flex justify-between w-full p-4 px-12 pt-20">
        <Link to="#">
          <RxHamburgerMenu size={18} />
        </Link>
        <div className="flex items-center space-x-6">
          {navItems?.map((item, index) => (
            <Link
              key={item?.id}
              href={item?.href}
              className={`text-white hover:text-primaryOrange text-[20px] ${
                item.id === "0" ? "font-semibold" : ""
              }`}
            >
              {item?.name}
            </Link>
          ))}
        </div>
        <Link to="#">
          <MdSearch size={18} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
