import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { GrArchlinux } from "react-icons/gr";
import { FaJava } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl ">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl" style={{ color: "#E34F26" }} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl" style={{ color: "#1572B6" }} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript
              className="text-7xl"
              style={{ color: "#F7DF1E" }}
            />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl" style={{ color: "#61DAFB" }} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDocker className="text-7xl" style={{ color: "#2496ED" }} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGnubash className="text-7xl" style={{ color: "#4EAA25" }} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <GrArchlinux className="text-7xl" style={{ color: "#1793D1" }} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl" style={{ color: "#007396" }} />
          </div>
      </div>
    </div>
  );
};

export default Technologies;
