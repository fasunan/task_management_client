/* eslint-disable react/no-unescaped-entities */

import { FaUserSecret } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { GiMedallist } from "react-icons/gi";
import { TbStars } from "react-icons/tb";

const Reviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center m-20">
      <div className="card w-60 bg-sky-200 shadow-xl">
        <figure className="px-10 pt-10 text-5xl">
          <FaUserSecret></FaUserSecret>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Secure!</h2>
          <p>and compliant</p>
        </div>
      </div>
      <div className="card w-60 bg-sky-200 shadow-xl">
        <figure className="px-10 pt-10 text-5xl text-orange-600">
          <HiUserGroup></HiUserGroup>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Happy teams</h2>
          <p>worldwide</p>
        </div>
      </div>
      <div className="card w-60 bg-sky-200 shadow-xl">
        <figure className="px-10 pt-10 text-5xl text-sky-400">
          <GiMedallist></GiMedallist>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Editor's Choice</h2>
          <p>iOS App Store</p>
        </div>
      </div>
      <div className="card w-60 bg-sky-200 shadow-xl">
        <figure className="px-10 pt-10 text-5xl text-yellow-400">
          <TbStars></TbStars>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">4.7 Stars</h2>
          <p> Google Play Store</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
