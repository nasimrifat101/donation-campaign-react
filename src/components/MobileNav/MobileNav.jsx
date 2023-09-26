import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
        <img className="w-48" src="https://i.postimg.cc/WpJRYv3G/Logo.png" alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary><NavLink to='/'>Home</NavLink></summary>
                <ul className="p-2 bg-base-100">
                  <li>
                   <NavLink to='/donation'>Donation</NavLink>
                  </li>
                  <li>
                  <NavLink to='/statistics'>Statistics</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
