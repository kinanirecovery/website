import { Logo } from "../../Logo/Logo";

import { FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MobileNav } from "./MobileNav";
import { useGlobal } from "../../../contexts/globals";

export const Header = () => {
  const { setIsMobileMenuOpen } = useGlobal();
  return (
    <>
      <MobileNav />
      <header className="w-full flex items-center justify-center lg:pt-20 pt-10">
        <div className="w-[90%] mx-auto flex items-center justify-center flex-col">
          <div className="w-full flex items-center justify-between gap-5 ">
            <div className="lg:block hidden"></div>
            <Logo />

            <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer lg:block hidden">
              <a
                href="https://github.com/0xkinani/website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div
              onClick={() => setIsMobileMenuOpen(true)}
              className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer lg:hidden "
            >
              <IoMenu />
            </div>
          </div>

          <div className="w-full p-5 border border-r-6 border-b-6 mt-10 rounded-xl items-center justify-center bg-white lg:flex hidden">
            <div className="w-full flex items-center justify-center gap-5 text-xl font-bold">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
