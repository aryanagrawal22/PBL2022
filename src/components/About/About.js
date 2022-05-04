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
            Many freshers in their first year of engineering face many questions
            such as which domain to choose? from where to start? Which platforms
            do we need to practice on? And many more. So, to solve and help
            these students in their early semesters we have thought of creating
            a website which would guide them through all the domains like Web,
            App, ML, AI, DS, Cloud etc. and help them in choosing those. Once
            the student selects any domain, he/she would refer to this site to
            follow the roadmap.
          </p>
        </div>
      </Fade>
      <Fade up cascade>
        <div>
          <p className="mx-auto w-full lg:w-3/4 mt-4 font-secondary font-normal text-gray-400 text-xl text-center">
            We are a group of 5, who have created this project for any new fresher struggling to select a domain, facing difficulties finding the resources or looking for a brief overview of the domain. The website would list down all the resources
            and tutorials needed for the same.
          </p>
        </div>
      </Fade>
    </div>
  );
}
