import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import From from "./From";

const Contact = () => {
  return (
    <div
      style={{ backgroundColor: "#051E37" }}
      className="max-w-7xl mx-auto  text-white border-2 
      border-teal-400
      "
    >
      {/* 051E36 */}
      <div className="w-[500px] p-4  bg-[#051E37] text-White lg:mx-[470px] ">
        <h1 className="text-4xl font-semibold my-5 mb-3">Let’s Start Talk</h1>
        <h1 className="mt-3 mb-10 ">
          Always available for freelancing if the right project comes along,
          <br />
          Feel free to contact me.
        </h1>
      </div>

      <div
        style={{ backgroundColor: "#05325C" }}
        className=" text-white
        border-2  border-t-teal-400
      flex flex-col md:flex-row lg:flex-row"
      >
        {/* border-2  border-t-teal-400 */}
        {/* This is right sight */}
        <div className="card w-1/3 rounded-2xl mx-10 -translate-y-24 flex flex-col ">
          <img
            src="https://i.ibb.co/VCw4xSc/417385991-586908906955130-8573275820475827649-n.jpg"
            alt="logo"
            className="w-80 h-80 rounded-2xl border-2  bg-inherit border-teal-400"
          />
          <div className="my-10 mx-0">
            <h1 className="text-white font-semibold mb-2 text-xl">Email</h1>
            <h1 className="text-white mb-2 text-2xl">
              mdkuraishirahman25@gmail.com
            </h1>
            <h1 className="text-white mb-2 font-semibold text-xl">What’s app</h1>
            <h1 className="text-white mb-2 text-2xl">+8801750791321</h1>
          </div>

          <div className="flex flex-row my-6 mx-2">
            <Link to="https://www.facebook.com/bonik.tj/about">
              <FaFacebook className="text-blue-200 text-4xl mr-3" />
            </Link>
            <Link to="https://www.linkedin.com/in/md-kuraishi-rahman-banik-30a2982a6/">
              <FaLinkedin className="text-blue-200 text-4xl mr-3" />
            </Link>
            <Link to="https://github.com/BANIKKURAISHI">
              <FaGithub className="text-blue-200 text-4xl mr-3" />
            </Link>
          </div>
        </div>
        {/* This is left sight */}
        <div className="w-2/3 my-4 lg:-mx-16  ">
          <From />
        </div>
      </div>
    </div>
  );
};

export default Contact;
