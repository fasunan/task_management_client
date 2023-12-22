/* eslint-disable react/no-unescaped-entities */

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Thank you for your query!");
      e.target.reset();
    }, 1000);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-12">
      <div className="text-center ml-32 mr-32 mb-12">
        <h2
          className=" text-4xl font-bold mb-7 bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent"
          data-aos="flip-up"
        >
          The Need for Task Management
        </h2>
        <p className="text-2xl font-semibold">
          Task management is the link between planning to do something and
          getting it done. Your task management software should provide an
          overview of work in progress that enables tracking from conception to
          completion. Enter MeisterTask: join teams everywhere who use our
          Kanban-style project boards to digitalize workflows and gain a clear
          overview of task progress. Let's get organized together!
        </p>
      </div>
      <div>
        <div className="hero min-h-screen  relative">
          <div
            className="hero-content flex-col lg:flex-row bg-sky-600 opacity-75"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div
              className="lg:w-1/2 relative "
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img
                src="https://i.ibb.co/D9zJ8Cw/26433067-7228781.jpg"
                className="w-3/4 rounded-lg shadow-2xl"
              />
            </div>
            <div
              className="lg:w-1/2 space-y-5 p-4 z-10 relative text-white"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <h3 className="text-3xl bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent font-bold">
                Get to Know Task Management
              </h3>
              <h1 className="text-5xl font-bold ">
                Talk to a Productivity Expert.
              </h1>
              <p className="py-6">
                Good work doesn’t need to be hard work. Task management removes
                the stress from organization, helping your team focus on what
                matters. Book a free consultation with a Meister productivity
                expert – you’ll soon get your team’s tasks in order.
              </p>

              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn bg-sky-700 text-white rounded-sm hover:bg-red-500 skeleton"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Drop A Query
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="text-blue-500">
                    <div className="text-center">
                      <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-4">
                        Send us your Query!
                      </h2>
                    </div>
                    <div>
                      <div className="hero py-6">
                        <div className="hero-content">
                          <div className="card">
                            <form onSubmit={handleSubmit}>
                              <div className="flex justify-between gap-3">
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text text-purple-500">
                                      Your Name
                                    </span>
                                  </label>
                                  <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    className="outline-none border-b border-pink-600"
                                  />
                                </div>
                                <div className="form-control flex flex-col">
                                  <label className="label">
                                    <span className="label-text text-purple-500">
                                      Your Email
                                    </span>
                                  </label>
                                  <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    className="outline-none border-b border-pink-600"
                                  />
                                </div>
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text text-purple-500">
                                    Your Message
                                  </span>
                                </label>
                                <input
                                  required
                                  type="text"
                                  name="message"
                                  placeholder="Whatever You want to Know"
                                  className="outline-none border-b border-pink-600"
                                />
                              </div>
                              <div className="form-control mt-6">
                                <SendMessageButton isLoading={isLoading} />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SendMessageButton = ({ isLoading }) => {
  return (
    <button
      className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
      type="submit"
      disabled={isLoading}
    >
      {isLoading && (
        <div className="absolute inset-3 flex items-end justify-end">
          <FaSpinner className="animate-spin" />
        </div>
      )}
      <span className="relative z-10">
        {isLoading ? "Sending..." : "Send ->"}
      </span>
    </button>
  );
};

export default AboutUs;
