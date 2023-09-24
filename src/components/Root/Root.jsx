import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
  <div>
      <div className="max-w-5xl mx-auto pt-5">
      <Header></Header>
      <Outlet></Outlet>
      </div>
  </div>
  );
};

export default Root;
