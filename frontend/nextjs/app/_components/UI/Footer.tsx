import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className="flex flex-1 flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <a
          href="https://www.linkedin.com/in/lam-dang-657949144/"
          className="mb-2 flex items-center text-xl text-gray-800 no-underline"
        >
          <FaLinkedin className="mr-2 text-xl" />
          LinkedIn
        </a>
        <a
          href="https://github.com/lam-valamorgulis/admin-project-reactjs-tailwindcss-redux"
          className="flex items-center text-xl text-gray-800 no-underline"
        >
          <FaGithub className="mr-2 text-xl" />
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Footer;
