import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CreateTask = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axiosPublic
      .post("/tasks", data) // Use the form data instead of taskInfo
      .then((res) => {
        if (res.data.insertedId) {
          console.log("task added to the database");
          reset(); // Reset the form
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "task created successfully.",
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
        <h1 className="text-3xl font-bold text-center">
          Create Your Task List <br /> For Easer to Remember
        </h1>
      </div>
      <div>
        <div className=" ">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-10">
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  Task Name
                </h2>
                <input
                  {...register("taskName")}
                  type="text"
                  name="taskName"
                  placeholder="Task Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  Short Description
                </h2>
                <input
                  {...register("description")}
                  type="text"
                  name="description"
                  required
                  placeholder="Short description"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  {" "}
                  Task Importance
                </h2>
                <input
                  {...register("importance")}
                  type="text"
                  name="importance"
                  placeholder="Task Importance"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  {" "}
                  Task Status
                </h2>

                <select
                  {...register("taskStatus")}
                  className="select select-accent w-full max-w-xs"
                >
                  <option disabled selected>
                    Task Status
                  </option>
                  <option>To-Do</option>
                  <option>Ongoing</option>
                  <option>Completed</option>
                </select>
              </div>

              <input
                type="submit"
                value="Create Task"
                className="btn mt-6 w-60  bg-indigo-200 text-sky-700"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
