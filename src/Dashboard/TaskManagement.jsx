import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const TaskManagement = () => {
  const taskData = useLoaderData();
  console.log(taskData);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://job-taskcraft-server.vercel.app/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              }).then(() => {
                // Reload the page
                window.location.reload();
              });
            }
          });
      }
    });
  };

  return (
    <div>
      {/* todo */}
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            To-Do List
          </h2>
          <div className="overflow-x-auto">
            <table className="table  w-full">
              <thead className="text-lg font-semibold shadow-md">
                <tr>
                  <th>#</th>
                  <th>Task Title</th>
                  <th>Details</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="hover:shadow-lg">
                {taskData.map((task, index) => (
                  <tr
                    key={task._id}
                    className="hover:shadow-lg hover:bg-red-200"
                  >
                    <th>{index + 1}</th>
                    <td className="font-bold">{task.taskTitle}</td>
                    <td>{task.description}</td>
                    <td>{task.deadline}</td>
                    <td>{task.priority}</td>
                    <th className="flex">
                      <Link to={`/dashboard/updateTask/${task._id}`}>
                        <button className=" btn-sm   bg-sky-400 hover:bg-sky-700 text-white font-semibold">
                          {" "}
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="btn-sm ml-6 bg-sky-500 hover:bg-red-700 text-white font-semibold "
                      >
                        {" "}
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Ongoing */}
      <div className="card bg-base-100 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title flex font-bold text-2xl items-center justify-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Ongoing List
          </h2>
          <div className="overflow-x-auto">
            <table className="table  w-full">
              <thead className="text-lg font-semibold shadow-md">
                <tr>
                  <th>#</th>
                  <th>Task Title</th>
                  <th>Details</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* <tbody className="hover:shadow-lg">
                {taskData.map((task, index) => (
                  <tr
                    key={task._id}
                    className="hover:shadow-lg hover:bg-red-200"
                  >
                    <th>{index + 1}</th>
                    <td className="font-bold">{task.taskTitle}</td>
                    <td>{task.description}</td>
                    <td>{task.deadline}</td>
                    <td>{task.priority}</td>
                    <th className="flex">
                      <Link to={`/dashboard/updateTask/${task._id}`}>
                        <button className=" btn-sm   bg-sky-400 hover:bg-sky-700 text-white font-semibold">
                          {" "}
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="btn-sm ml-6 bg-sky-500 hover:bg-red-700 text-white font-semibold "
                      >
                        {" "}
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
      {/* completed */}
      <div className="card bg-base-100 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title flex font-bold text-2xl items-center justify-center bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
            Competed List
          </h2>
          <div className="overflow-x-auto">
            <table className="table  w-full">
              <thead className="text-lg font-semibold shadow-md">
                <tr>
                  <th>#</th>
                  <th>Task Title</th>
                  <th>Details</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* <tbody className="hover:shadow-lg">
                {taskData.map((task, index) => (
                  <tr
                    key={task._id}
                    className="hover:shadow-lg hover:bg-red-200"
                  >
                    <th>{index + 1}</th>
                    <td className="font-bold">{task.taskTitle}</td>
                    <td>{task.description}</td>
                    <td>{task.deadline}</td>
                    <td>{task.priority}</td>
                    <th className="flex">
                      <Link to={`/dashboard/updateTask/${task._id}`}>
                        <button className=" btn-sm   bg-sky-400 hover:bg-sky-700 text-white font-semibold">
                          {" "}
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="btn-sm ml-6 bg-sky-500 hover:bg-red-700 text-white font-semibold "
                      >
                        {" "}
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
