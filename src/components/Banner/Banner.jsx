/* eslint-disable react/prop-types */
const Banner = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div>
        <div
          className="hero md:h-[400px] h-[300px]"
          style={{
            backgroundImage: "url(https://i.postimg.cc/SKzjNPdc/bg.png)",
          }}
        >
          <div className="hero-overlay bg-white bg-opacity-80"></div>
          <div className="hero-content flex flex-col items-center justify-center text-neutral-content">
            <div className="text-black text-center">
              <h1 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-bold">
                I Grow By Helping People In Need
              </h1>
              <div className="form-control">
                <div className="input-group w-full md:w-96 mx-auto">
                  <input
                    type="text"
                    placeholder="Search here…"
                    className="input input-bordered w-full"
                    onChange={handleSearch}
                  />
                  <button className="btn btn-error hidden md:block md:w-auto mt-2 md:mt-0">
                    Search
                  </button>
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
