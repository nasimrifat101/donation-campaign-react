import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import MobileNav from "../MobileNav/MobileNav";

const Root = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto lg:pt-5">
        <div className="hidden md:block">
          <Header></Header>
        </div>
        <div className="md:hidden">
          <MobileNav></MobileNav>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
