import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-300 p-4">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img className="w-32" src="https://i.postimg.cc/WpJRYv3G/Logo.png" alt="Logo" />
        </Link>
        <button
          className="text-white md:hidden"
          onClick={toggleNav}
        >
          {isNavOpen ? "Close" : "Menu"}
        </button>
      </div>
      <ul className={`md:hidden ${isNavOpen ? "block" : "hidden"}`}>
        <li>
          <Link
            to="/"
            className="block py-2 text-white hover:text-[#FF444A]"
            onClick={toggleNav}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/donation"
            className="block py-2 text-white hover:text-[#FF444A]"
            onClick={toggleNav}
          >
            Donation
          </Link>
        </li>
        <li>
          <Link
            to="/statistics"
            className="block py-2 text-white hover:text-[#FF444A]"
            onClick={toggleNav}
          >
            Statistics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
