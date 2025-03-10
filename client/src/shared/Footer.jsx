import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div className="flex gap-5 items-center">
                <img className="w-10 h-10" src="/bridegroom.png" alt="" />
                <h2 className="text-xl font-bold">HeartMatch</h2>
              </div>
              <p className="max-w-sm mt-2 text-gray-500 ">
                Trusted matrimony platform that connects individuals with their
                ideal partners. We offer personalized matchmaking and secure
                communication for meaningful relationships.
              </p>

              <div className="flex mt-6 -mx-2 text-2xl">
                <Link
                  to="https://www.linkedin.com/in/istiaq-ahsan"
                  className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 "
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </Link>

                <Link
                  to="https://www.facebook.com/profile.php?id=100095084532947"
                  className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 "
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </Link>

                <Link
                  to="https://github.com/istiaq-ahsan"
                  className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 "
                  aria-label="Github"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  community
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Blog
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  Tec
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  Music
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  Videos
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  Mega cloud
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  Aperion UI
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600  hover:underline"
                >
                  Meraki UI
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600  hover:underline">
                  +8801575306824
                </span>
                <span className="block mt-2 text-sm text-gray-600  hover:underline">
                  ahsanistiaq23@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none " />

        <div>
          <p className="text-center text-gray-500 ">
            © IAR - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
