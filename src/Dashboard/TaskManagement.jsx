import { Link, useLoaderData } from "react-router-dom";

const TaskManagement = () => {
  const taskData = useLoaderData();
  console.log(taskData);
  return (
    <div>
      <h2>{taskData.length}</h2>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex items-center justify-center">
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
                    className="hover:shadow-lg hover:bg-red-400"
                  >
                    <th>{index + 1}</th>
                    <td>{task.taskTitle}</td>
                    <td>{task.description}</td>
                    <td>{task.deadline}</td>
                    <td>{task.priority}</td>
                    <th className="flex">
                      <Link to={`dashboard/updateTask/${task._id}`}>
                        <button className="btn btn-ghost "> Update</button>
                      </Link>
                      <button className="btn btn-ghost "> Delete</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
