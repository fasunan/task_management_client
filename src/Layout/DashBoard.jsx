import { Helmet } from "react-helmet-async";
import { FaHome, FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";

const Dashboard = () => {
  const { user, login } = useContext(AuthContext);
  return (
    <div className="flex">
      <Helmet>
        <title>TaskCraft || Dashboard</title>
      </Helmet>

      <div className="w-64 min-h-screen bg-indigo-700 text-lg font-semibold text-red-400">
        <div className="m-8">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-red-400 ">
              <img src={user?.photoURL} />
            </div>
          </div>

          <p className=" font-semibold text-base mt-2 text-cyan-400">
            {user?.displayName}
          </p>
        </div>
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/CreateTask">
              <BiTask></BiTask> Create New Task
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard/PreviousTask">Previous Task</NavLink>
          </li> */}
          <li>
            <NavLink to="/dashboard/taskManagement">
              <FaTasks></FaTasks> Task Management
            </NavLink>
          </li>

          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
