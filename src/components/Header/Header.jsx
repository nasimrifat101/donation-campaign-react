import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donation">Donation</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <Link to="/">
            <img className="w-48" src="/src/assets/Logo.png" alt="" />
          </Link>
        </div>
        <div className="navbar-end flex">
          <ul className="menu menu-horizontal space-x-6">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
