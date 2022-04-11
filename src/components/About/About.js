import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="min-h-[68vh] mx-6">
      <Fade up>
        <div>
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-[#00e5ff]">
            About Us
          </h1>
        </div>
      </Fade>
      <Fade up cascade>
        <div>
          <p className="mx-auto w-full lg:w-3/4 mt-4 font-secondary font-normal text-gray-400 text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Fade>
    </div>
  );
}