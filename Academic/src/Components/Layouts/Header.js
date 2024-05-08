import React, { useContext } from "react";
import { GiBookshelf } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import UserContext from "../../Hooks/UserContext";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { PiStudent, PiUser } from "react-icons/pi";


const Header = () => {
  const { setUser, setPaperList } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const logout = () => {
    setUser("");
    setPaperList([]);
    localStorage.clear();
    toast.info("Logged Out");
  };
  return (
    <header className="absolute top-0 flex w-full justify-even-between bg-blue-950 text-slate-50 dark:bg-white-950 ">
      <Link
        to="/dash"
        className="text-md m-2 mr-4 flex items-center rounded-md p-[7px] font-semibold duration-200 hover:bg-blue-700 hover:text-slate-100"
      >
       Home
      </Link>
      
        <NavLink to={"./paper"}className="text-md m-2 mr-4  gap-2 flex items-center rounded-md p-[7px] font-semibold duration-200 hover:bg-blue-700 hover:text-slate-100">
        <GiBookshelf /> Papers
          </NavLink>
          <NavLink to={"./attendance"}className="text-md m-2 mr-4  gap-2 flex items-center rounded-md p-[7px] font-semibold duration-200 hover:bg-blue-700 hover:text-slate-100"> 
          <IoCalendarOutline /> Attendance
          </NavLink>
          <NavLink to={"./internal"}className="text-md m-2 mr-4  gap-2 flex items-center rounded-md p-[7px] font-semibold duration-200 hover:bg-blue-700 hover:text-slate-100"> 
          <HiOutlineDocumentReport /> Internal Marks
          </NavLink>
          <NavLink to={"./time_schedule"}className="text-md m-2 mr-4  gap-2 flex items-center rounded-md p-[7px] font-semibold duration-200 hover:bg-blue-700 hover:text-slate-100"> 
          <AiOutlineSchedule /> Time Schedule
          </NavLink>
          <NavLink to={"./profile"} className="text-md m-2 mr-4 flex items-center rounded-md p-[7px] font-semibold duration-200 hover:bg-blue-700 hover:text-slate-100">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-blue-600/40 ">
            {user.role === "student" ? (
              <PiStudent className="pt-[0.1rem] text-2xl" />
            ) : (
              <PiUser className="pt-[0.1rem] text-2xl" />
            )}
            {user.name}
          </li>
        </NavLink>
        <NavLink to="../register" className="flex items-center gap-2 px-3 py-1 text-lg font-semibold hover:bg-gray-200 rounded">
          SignUp
        </NavLink>
      
      
          
      <Link
        to="./"
        className="text-md m-2 mr-4 flex items-center rounded-md p-[7px] font-semibold duration-200 hover:bg-red-700 hover:text-slate-100"
        onClick={() => logout()}
      >
        <p>&nbsp;Logout&nbsp;&nbsp;</p>
        <FiLogOut className="text-xl" />
      </Link>
    </header>
  );
};

export default Header;
