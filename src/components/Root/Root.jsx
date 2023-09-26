import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import MobileNav from "../MobileNav/MobileNav";

const Root = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto pt-5">
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
