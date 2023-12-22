import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const CreateTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const userData = {
      ...data,
      userEmail: user.email, // Replace with the user's email or ID
    };

    axiosPublic
      .post("/tasks", userData) // Use the form data instead of taskInfo
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
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          Create Your Task List <br /> For Easer to Remember
        </h1>
      </div>
      <div>
        <div className=" ">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-10">
              <div>
                <h2 className="text-xl font-bold text-sky-400 mb-2">
                  Task Title
                </h2>
                <input
                  {...register("taskTitle")}
                  type="text"
                  name="taskTitle"
                  placeholder="Task Title"
                  className="input input-bordered input-error w-full max-w-xs"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-sky-400 mb-2">
                  Short Description
                </h2>
                <input
                  {...register("description")}
                  type="text"
                  name="description"
                  required
                  placeholder="Short description"
                  className="input input-bordered input-error w-full max-w-xs"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-sky-400 mb-2">
                  Task Deadline
                </h2>
                <input
                  {...register("deadline")}
                  type="date"
                  name="deadline"
                  placeholder="Task Deadline"
                  className="input input-bordered input-error w-full max-w-xs"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-sky-400 mb-2">
                  Task Priority
                </h2>
                <select
                  {...register("priority")}
                  className="select select-error w-full max-w-xs"
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
                value="Create Task"
                className="btn mt-6 w-60  bg-sky-400 hover:bg-red-500 font-semibold text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
