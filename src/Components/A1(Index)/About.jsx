import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const message = "Hello,I'm";
  const ms="Let's"
  return (
    <div className="max-w-7xl mx-auto bg-violet-400 text-white">
      <div className=" flex flex-row">
        <div className="flex-1 mx-10">
          <h1 className="text-md font-medium my-2">{message}</h1>
          <h1 className="text-2xl font-medium">MD.KURAISHI RAHMAN</h1>
          <h1
          className="text-md font-medium "
            style={{
             
              margin: "auto 0",
              fontWeight: "normal",
            }}
          >
           <span className="text-xl font-medium">and I am a</span><span>{" "}</span>
            <span style={{ color: "red", fontWeight: "bold",fontSize:"2rem" }}>
              <Typewriter
                words={[
                  "Web Developer",
                  "Front-End Developer",
                  "React js Developer",
                  "MERN stack Developer",
                  
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
         <h1>
         As a MERN (MongoDB, Express.js, React.js, Node.js) Stack Developer, I specialize in building  web applications. With expertise in both frontend and backend technologies, I create seamless user experiences and efficient server-side solutions.
and enthusiastic about contributing my skills and creativity to innovative projects.{ms}collaborate to build exceptional web experiences and scalable solutions.
         </h1>
          {/* <h1 className="text-justify"> I am a dynamic web developer specializing in creating responsive websites and engaging user interfaces. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), I bring ideas to life by implementing dynamic routes and crafting seamless user experiences. Whether it is building full-stack applications or optimizing existing ones, I thrive on turning concepts into functional and visually appealing digital solutions.</h1> */}
        </div>

        <div>
          <img src="" alt="" />
        </div>
      </div>
      {/* <h1>I am actively seeking opportunities to contribute my skills and learn from experienced professionals in the field. If given the chance, I am confident in my ability to make meaningful contributions to web development projects and grow as a valuable team member.</h1> */}
    </div>

  );
};

export default About;
