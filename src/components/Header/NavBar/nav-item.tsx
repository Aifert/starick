import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

import { NavBarItem } from "./types";

type Props = {
  link: NavBarItem;
};

const NavItem = ({ link }: Props) => {
  // handles a nav item state (hovered/clicked)
  const [activated, setActivated] = useState(false);

  return (
    // root div handles mouse in and out events
    <li
      onMouseEnter={() => setActivated(true)}
      onMouseLeave={() => setActivated(false)}
    >
      {/* button handles click action */}
      <button className="my-2 w-max border-t-4 border-white hover:brightness-90 hover:filter lg:my-0 lg:px-2 hover:lg:border-starick-green">
        <Link href={link.href}>
          {link.label}
          {link.submenu && <FiChevronDown className="inline" />}
        </Link>
      </button>
      {/* handles added submenu links if they exist */}
      {link.submenu && (
        <ul
          className={`${
            activated ? "" : "hidden"
          } w-max border-l-2 border-starick-olive bg-white lg:absolute lg:shadow-md`}
        >
          {link.submenu.map((sublink) => (
            <li key={sublink.href}>
              <Link
                href={sublink.href}
                className="block px-2 py-0.5 hover:bg-starick-olive lg:py-0.5 lg:text-center"
              >
                {sublink.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
