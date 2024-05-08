import { Link } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { RiUserAddLine } from "react-icons/ri";
import { PiBooks, PiUser, PiStudent } from "react-icons/pi";
import { useContext, useEffect } from "react";
import UserContext from "../../Hooks/UserContext";
import axios from "../../config/api/axios";
import dashImage from './DDU1 (1).jpg';

const Dash = () => {
  const { user, setPaperList } = useContext(UserContext);

  useEffect(() => {
    const getPapers = async () => {
      const response = await axios.get(`paper/${user.userType}/${user._id}`);
      setPaperList(response.data);
    };
    getPapers();
  }, [setPaperList, user]);

  return (
    <div className="relative">
      <h2 className="m-6 font-spectral mx-auto text-center text-4xl font-bold dark:text-slate-400">
        Deen Dayal Upadhyaya College
      </h2><br></br>
      
      <img src={dashImage} alt="Foreground" className="mx-auto" />
       <main className="relative z-10">
      
      <br></br>
      <br></br>
      <br></br>
      <div photo="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:col-span-1 lg:row-span-full relative">
 
</div>
     
      <br></br>
      <br></br>
      <br></br>
      <br></br><br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className="grid grid-cols-3 place-content-center gap-1 px-1 py-4 lg:gap-2 lg:px-8 xl:gap-4">
       
        <Link
          className="flex gap-2 rounded-lg bg-white-300 p-6 text-base hover:bg-white-400/100 dark:bg-white-950/800 dark:hover:bg-blue-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./paper"}
        >
          <GiBookshelf className="text-[2.5rem] lg:text-[4rem] " />
          <div className="font-semibold">
            Papers
            <p className="text-sm font-normal lg:text-base ">
              View Papers and Notes
            </p>
          </div>
        </Link>

        <Link
          className="flex gap-2 rounded-lg bg-white-300 p-6 text-base hover:bg-white-400/90 dark:bg-white-950/80 dark:hover:bg-blue-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./attendance"}
        >
          <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem] " />
          <div className="font-semibold">
            Attendance
            <p className="text-sm font-normal lg:text-base ">
              Add or Edit Attendance
            </p>
          </div>
        </Link>

        <Link
          className="flex gap-2 rounded-lg bg-white-300 p-6 text-base hover:bg-white-400/90 dark:bg-white-950/80 dark:hover:bg-blue-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./internal"}
        >
          <HiOutlineDocumentReport className="text-[2.5rem] lg:text-[4rem] " />
          <div className="font-semibold">
            Internal Mark
            <p className="text-sm font-normal lg:text-base ">
              View or Edit Internal Marks
            </p>
          </div>
        </Link>

        <Link
          className="flex gap-2 rounded-lg bg-white-300 p-6 text-base hover:bg-white-400/90 dark:bg-white-950/80 dark:hover:bg-blue-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./time_schedule"}
        >
          <AiOutlineSchedule className="text-[2.5rem] lg:text-[4rem] " />
          <div className="font-semibold">
            Time Schedule
            <p className="text-sm font-normal lg:text-base ">
              View or Edit Time Schedule
            </p>
          </div>
        </Link>

        {user.role === "HOD" && (
          <>
            <Link
              className="flex gap-2 rounded-lg bg-white-300 p-6 text-base hover:bg-white-400/90 dark:bg-white-950/80 dark:hover:bg-blue-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
              to={"./add_paper"}
            >
              <BiBookAdd className="text-[2.5rem] lg:text-[4rem] " />
              <div className="font-semibold">
                Add Paper
                <p className="text-sm font-normal lg:text-base ">
                  Add a New Paper
                </p>
              </div>
            </Link>

            <Link
              className="flex gap-2 rounded-lg bg-white-300 p-6 text-base hover:bg-white-400/90 dark:bg-white-950/80 dark:hover:bg-blue-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
              to={"./approve_staff"}
            >
              <RiUserAddLine className="text-[2.5rem] lg:text-[4rem] " />
              <div className="font-semibold">
                Approve Staff
                <p className="text-sm font-normal lg:text-base ">
                  Approve registered staff(s)
                </p>
              </div>
            </Link>
          </>
        )}
        {user.role === "student" && (
          <Link
            className="flex gap-2 rounded-lg bg-white-300 p-6 text-base hover:bg-white-400/90 dark:bg-white-950/80 dark:hover:bg-blue-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
            to={"./join_paper"}
          >
            <PiBooks className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
              Manage Paper
              <p className="text-sm font-normal lg:text-base ">
                Join or Leave Paper
              </p>
            </div>
          </Link>
        )}
        <Link
          className="flex gap-2 rounded-lg bg-white-300 p-6 text-base hover:bg-white-400/90 dark:bg-white-950/80 dark:hover:bg-blue-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./profile"}
        >
          {user.role === "student" ? (
            <PiStudent className="text-[2.5rem] lg:text-[4rem] " />
          ) : (
            <PiUser className="text-[2.5rem] lg:text-[4rem] " />
          )}
          <div className="font-semibold">
            Profile
            <p className="text-sm font-normal lg:text-base ">
              View or Edit Profile
            </p>
          </div>
        </Link>
      </div>
      
      
    161:       </main>
    162:     </div>
  );
};

export default Dash;
