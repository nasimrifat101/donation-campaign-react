/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const ErrorPage = () => {
  return (
    <div className="grid grid-cols-2 gap-20 m-20 ml-40">
      <div>
        <div className="text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 ... bg-clip-text text-transparent">
          BOO~ <br />
          CONTENTS <br />
          RAN <br />
          AWAY
        </div>
        <h2 className=" mt-10 font-semibold">DON'T WORRY I CAN HELP YOU</h2>
        <div>
          <Link to="/">
            <p className="flex items-center text-sm font-semibold text-green-400">
              <AiOutlineArrowRight></AiOutlineArrowRight> FIND YOUR WAY HOME
            </p>
          </Link>
        </div>
      </div>
      <div>
        <img className="h-96" src="/src/assets/images/ghost.png" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;