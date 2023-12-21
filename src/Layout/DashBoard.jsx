import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <Helmet>
        <title>TaskCraft || Dashboard</title>
      </Helmet>

      <div className="w-64 min-h-screen bg-[#4796BD] mt-5">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/CreateTask">Create New Task</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/PreviousTask">Previous Task</NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/todoList">To-Do List</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/ongoingList">Ongoing List</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/completedList">Completed List</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/salesSummary">List Of Task</NavLink>
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
