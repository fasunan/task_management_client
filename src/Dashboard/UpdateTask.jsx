import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateTask = () => {
  const updateTask = useLoaderData();
  const { taskTitle, deadline, priority, description } = updateTask;

  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axiosPublic
      .patch(`/updateTask/${updateTask._id}`, data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "task updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error(
          "Error creating task:",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <div className="">
      <div className="m-10 ">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
          Update Your Task
        </h1>
      </div>
      <div>
        <div className=" ">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-10">
              <div>
                <h2 className="text-xl font-bold text-sky-700 mb-2">
                  Task Title
                </h2>
                <input
                  {...register("taskTitle")}
                  defaultValue={taskTitle}
                  type="text"
                  name="taskTitle"
                  placeholder="Task Title"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-sky-700 mb-2">
                  Short Description
                </h2>
                <input
                  {...register("description")}
                  defaultValue={description}
                  type="text"
                  name="description"
                  required
                  placeholder="Short description"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-sky-700 mb-2">
                  Task Deadline
                </h2>
                <input
                  {...register("deadline")}
                  defaultValue={deadline}
                  type="date"
                  name="deadline"
                  placeholder="Task Deadline"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-sky-700 mb-2">
                  Task Priority
                </h2>
                <select
                  {...register("priority")}
                  defaultValue={priority}
                  className="select select-primary w-full max-w-xs"
                >
                  <option disabled defaultValue="">
                    Task Priority
                  </option>
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </select>
              </div>

              <input
                type="submit"
                value="Update Task"
                className="btn mt-6 w-40 bg-sky-700 hover:bg-red-500 text-white font-semibold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
