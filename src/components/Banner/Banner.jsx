import React from "react";

const Banner = ({setSearchQuery}) => {
    const handleSearch = (e) => {
        setSearchQuery(e.target.value); // Update the searchQuery in the parent component
      };

  return (
    <div>
      <div>
        <div
          className="hero h-[400px]"
          style={{
            backgroundImage: "url(src/assets/bg.png)",
          }}
        >
          <div className="hero-overlay bg-white bg-opacity-80"></div>
          <div className="hero-content flex flex-col items-center justify-center text-neutral-content">
            <div className="text-black">
              <h1 className="mb-5 text-4xl font-bold">
                I Grow By Helping People In Need
              </h1>
              <div className="form-control">
                <div className="input-group w-100 flex justify-center">
                  <input
                    type="text"
                    placeholder="Search here…"
                    className="input input-bordered"
                    onChange={handleSearch}
                  />
                  <button className="btn btn-error">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;