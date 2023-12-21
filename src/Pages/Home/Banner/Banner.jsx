import { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";

const Banner = () => {
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    const isAuthenticated = !!user;

    const destination = isAuthenticated ? "/dashboard" : "/login";

    window.location.href = destination;
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/8Y1Cfjm/bearded-male-organizing-his-tasks-using-sticky-notes.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent ">
              Welcome to TaskCraft
            </h1>
            <h1 className="mb-5 text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              It’s Time to Get Organized
            </h1>
            <p className="mb-5 font-semibold text-lg bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">
              Task management is the link between planning to do something and
              getting it done.
            </p>

            <button
              onClick={handleClick}
              className="rounded-sm text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-purple px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
            >
              <span className="relative font-medium z-10">Let’s Explore</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
