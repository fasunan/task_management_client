import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import { MdSpaceDashboard } from "react-icons/md";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link className="hover:text-red-600" to="/">
          Home
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <Link className="hover:text-red-600" to="/dashboard/taskManagement">
              <MdSpaceDashboard></MdSpaceDashboard>Your Task
            </Link>
          </li>
          <div className="flex gap-4 mr-4">
            <span className=" mt-2 text-cyan-400">{user?.displayName}</span>

            {/* <span>
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-red-400 ">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </span> */}
          </div>
          <button onClick={handleLogOut} className="hover:text-red-600">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10  max-w-screen-xl bg-sky-700 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img
            className="w-12 rounded-md"
            src="https://i.ibb.co/F78Kw2q/checklist-7083603.png"
            alt=""
          />
          <a className="btn btn-ghost normal-case text-xl">TaskCraft</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
