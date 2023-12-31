import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TaskList = ({ task }) => {
  console.log(task);
  const { description, deadline, taskTitle, priority, _id } = task;

  console.log(deadline);
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
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            To-Do List
          </h2>
          <div className="overflow-x-auto">
            <table className="table  w-full">
              <thead className="text-lg font-semibold shadow-md">
                <tr>
                  <th>Task Title</th>
                  <th>Details</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="hover:shadow-lg">
                <tr className="hover:shadow-lg hover:bg-red-200">
                  {/* <th>{index + 1}</th> */}
                  <td className="font-bold">{taskTitle}</td>
                  <td>{description}</td>
                  <td>{deadline}</td>
                  <td>{priority}</td>
                  <th className="flex">
                    <Link to={`/dashboard/updateTask/${_id}`}>
                      <button className=" btn-sm   bg-sky-400 hover:bg-sky-700 text-white font-semibold">
                        {" "}
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="btn-sm ml-6 bg-sky-500 hover:bg-red-700 text-white font-semibold "
                    >
                      {" "}
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Ongoing */}
      {/* <div className="card bg-base-100 shadow-xl mt-10">
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
            </table>
          </div>
        </div>
      </div> */}
      {/* completed */}
      {/* <div className="card bg-base-100 shadow-xl mt-10">
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
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TaskList;

/*

import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const TaskManagement = () => {
  const [taskData, setTaskData] = useState(useLoaderData());

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

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedTasks = Array.from(taskData);
    const [removed] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, removed);

    setTaskData(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            // {/* todo */
//             <div className="card bg-base-100 shadow-xl mt-10">
//               <div className="card-body">
//                 <h2 className="card-title font-bold text-2xl flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
//                   To-Do List
//                 </h2>
//                 <div className="overflow-x-auto">
//                   <table className="table  w-full">
//                     <thead className="text-lg font-semibold shadow-md">
//                       <tr>
//                         <th>#</th>
//                         <th>Task Title</th>
//                         <th>Details</th>
//                         <th>Deadline</th>
//                         <th>Priority</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <Droppable droppableId="tasks" direction="vertical">
//                       {(provided) => (
//                         <tbody
//                           className="hover:shadow-lg"
//                           ref={provided.innerRef}
//                           {...provided.droppableProps}
//                         >
//                           {taskData.map((task, index) => (
//                             <Draggable
//                               key={task._id}
//                               draggableId={task._id}
//                               index={index}
//                             >
//                               {(provided) => (
//                                 <tr
//                                   ref={provided.innerRef}
//                                   {...provided.draggableProps}
//                                   {...provided.dragHandleProps}
//                                   className="hover:shadow-lg hover:bg-red-200"
//                                 >
//                                   <th>{index + 1}</th>
//                                   <td className="font-bold">
//                                     {task.taskTitle}
//                                   </td>
//                                   <td>{task.description}</td>
//                                   <td>{task.deadline}</td>
//                                   <td>{task.priority}</td>
//                                   <th className="flex">
//                                     <Link
//                                       to={`/dashboard/updateTask/${task._id}`}
//                                     >
//                                       <button className=" btn-sm   bg-sky-400 hover:bg-sky-700 text-white font-semibold">
//                                         {" "}
//                                         Update
//                                       </button>
//                                     </Link>
//                                     <button
//                                       onClick={() => handleDelete(task._id)}
//                                       className="btn-sm ml-6 bg-sky-500 hover:bg-red-700 text-white font-semibold "
//                                     >
//                                       {" "}
//                                       Delete
//                                     </button>
//                                   </th>
//                                 </tr>
//                               )}
//                             </Draggable>
//                           ))}
//                         </tbody>
//                       )}
//                     </Droppable>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default TaskManagement;

// */
