import logo from "../assets/Logo.png";
import { FaLinkedin, FaMailBulk, FaMailchimp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between  py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 w-10" alt=" Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="mailto:vigneshbalanmvgs2003@gmail.com"
          target="__blank"
          rel="noopener noreferrer"
        >
          <IoMdMail />
        </a>

        <a
          href="https://www.linkedin.com/in/vignesh-balan-mvgs"
          target="__blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/vigneshbalan-mvgs"
          target="__blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Vigneshmvgs"
          target="__blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
