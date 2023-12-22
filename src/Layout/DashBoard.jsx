import { Helmet } from "react-helmet-async";
import { FaHome, FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <Helmet>
        <title>TaskCraft || Dashboard</title>
      </Helmet>

      <div className="w-64 min-h-screen bg-indigo-700 text-lg font-semibold text-red-400">
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
