import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCalendarAlt, FaInbox, FaRegCalendarCheck, FaSearch, FaThLarge } from "react-icons/fa";
import Profile from "./profile";
import AddTask from "./addtask";




function Saidbar({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "search",
      icon: <FaSearch />
    },
    {
      path: "/project",
      name: "InBox",
      icon: <FaInbox />
    },
    {
      path: "/today",
      name: "today",
      icon: <FaRegCalendarCheck />
    },
    {
      path: "/upcoming",
      name: "upcoming",
      icon: <FaCalendarAlt />
    },
    {
      path: "/filters-labels",
      name: "filters-labels",
      icon: <FaThLarge />
    }
  ];
  return (
    <div className="flex w-full ">

      <div
        style={{ right: isOpen ? "220px" : "0px", background: isOpen ? "#fff" : "#fcfaf8", width: isOpen ? "80px" : "300px" }}
        className=" transition-all ease-in-out relative  p-4 flex flex-col gap-2"
      >
        <Profile
          elem={
            <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
        />
        <AddTask   />
        {menuItem.map((item, idx) => (
          <NavLink to={item.path} key={idx} className="text-[#666] flex item-center gap-5 p-1 pl-3 hover:bg-[#fee6e3] rounded-lg">
            <div className="icon relative top-1">{item.icon}</div>
            <div className="link">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}

export default Saidbar;
