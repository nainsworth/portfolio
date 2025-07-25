import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {

const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center py-6 px-12 xl:w-7xl xl:px-0">
      <div>
        <p className="text-xl">Portfolio Logo</p>
      </div>

      <div>
        <div className="sm:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} direction="right" size={26} />
        </div>

        <ul className="hidden sm:flex gap-8">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
