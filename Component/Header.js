import React, { useEffect, useState } from "react";

const Header = () => {
  const [navBackground, setnavBackground] = useState();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      
      const backgroundcolor = window.scrollY < 70 ? "transparent" : "white";

      setnavBackground(backgroundcolor);
    });
  }, []);

  return (
    <div className="fixed z-10  border-solid border-b-2 border-white w-screen  ">
      <nav
        className="    nav flex flex-wrap items-center justify-between  md:pr-20 "
        style={{ backgroundColor: `${navBackground}` }}
      >
        <div className="flex flex-wrap items-center mr-6 py-3 text-grey-darkest">
          <svg
            className="fill-current h-8 mr-2 w-8"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            clipRule="evenodd"
            viewBox="0 0 716 895"
          ></svg>
          <div>
            {" "}
            <span className="font-bold  text-[#5d5d5d] text-xl tracking-tight">
              Amit Chouksey & Company
            </span>
            <p className="text-xs">Chartered Accountants</p>
          </div>
        </div>

        <input className="menu-btn hidden md:hidden lg:hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul className="  white_bg  menu text-[#575b5e]  border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto font-bold text-sm">
          <li className="border-t md:border-none hover:text-[#13b1cd]">
            <a
              href="/"
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker "
            >
              HOME
            </a>
          </li>

          <li className="border-t md:border-none hover:text-[#13b1cd]">
            <a
              href="/FirmProfile"
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              FIRM PROFILE
            </a>
          </li>

          <li className="border-t md:border-none hover:text-[#13b1cd]">
            <a
              href="/Services"
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              SERVICES
            </a>
          </li>
          <li className="border-t md:border-none hover:text-[#13b1cd]">
            <a
              href="/Industries"
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              INDUSTRY
            </a>
          </li>
          <li className="border-t md:border-none hover:text-[#13b1cd]">
            <a
              href="/Gallery"
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
            GALLERY
            </a>
          </li>
          <li className="border-t md:border-none hover:text-[#13b1cd]">
            <a
              href="/ContactUs"
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
