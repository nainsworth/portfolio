import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {

const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-50 fixed top-0 transition-all duration-300">
      <div className="container flex justify-between items-center py-6 px-12 mx-auto">
        <div>
          <p className="text-xl">Portfolio Logo</p>
        </div>
        <nav>
          <div className="sm:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              direction="right"
              size={26}
            />
          </div>
          <ul className="hidden sm:flex gap-8">
            <li>
              <a className="navLink" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                Experience
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="navLink" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
