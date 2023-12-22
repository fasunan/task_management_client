import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BenefitedUsers = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="bg-gray-100 py-12 skeleton">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent ">
            Who Can Benefit?
          </h2>
          <p className="mb-8">
            Here we show you who can mostly benefited to use{" "}
            <span className="font-bold text-red-500">TaskCraft</span>
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-aos="fade-up"
          >
            {/* Person 1: Developers */}
            <div
              className="p-6 bg-white rounded-md shadow-md"
              data-aos="fade-right"
            >
              <h3 className="text-xl text-sky-700 font-semibold mb-4">
                Developers
              </h3>
              <p className="text-gray-700">
                Enhance your productivity and manage tasks efficiently with our
                platform designed for developers.
              </p>
            </div>

            {/* Person 2: Corporate Professionals */}
            <div
              className="p-6 bg-white rounded-md shadow-md"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-sky-700 mb-4">
                Corporate Professionals
              </h3>
              <p className="text-gray-700">
                Streamline your workflow, organize tasks, and collaborate
                seamlessly in a corporate setting.
              </p>
            </div>

            {/* Person 3: Bankers */}
            <div
              className="p-6 bg-white rounded-md shadow-md"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-sky-700 mb-4">
                Bankers
              </h3>
              <p className="text-gray-700">
                Stay on top of deadlines, manage financial tasks, and improve
                efficiency in banking operations.
              </p>
            </div>

            {/* Person 4: Custom Category */}
            <div
              className="p-6 bg-white rounded-md shadow-md"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-semibold text-sky-700 mb-4">
                Your Category
              </h3>
              <p className="text-gray-700">
                Tailor the platform to meet the specific needs of your industry
                or profession for maximum benefit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitedUsers;
