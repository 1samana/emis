import React, { useState, useContext } from "react";
import {
  FaHome,
  FaCog,
  FaClipboardList,
  FaUsersCog,
  FaUserTag,
  FaUserCircle,
} from "react-icons/fa";
import {
  MdGroup,
  MdArrowDropDown,
  MdArrowDropUp,
  MdPersonAdd,
  MdFeedback,
  MdAddAlert,
  MdAnnouncement,
} from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import CreateUserPage from "../pages/CreateUserPage";
import { IoMdAlert } from "react-icons/io";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const Sidebar = () => {
  const [activityOpen, setActivityOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [assignmentOpen, setAssignmentOpen] = useState(false);
  const [qnaOpen, setQnaOpen] = useState(false);
  const { userRole } = useContext(AuthContext); // Get userRole from context

  // Toggle functions
  const handleActivityToggle = () => setActivityOpen(!activityOpen);
  const handleNoticeToggle = () => setNoticeOpen(!noticeOpen);
  const handleCreateUserToggle = () => setIsOpen(!isOpen);
  const handleAssignmentToggle = () => setAssignmentOpen(!assignmentOpen);
  const handleQnaToggle = () => setQnaOpen(!qnaOpen);

  return (
    <>
      <div className="bg-white-900 h-screen min-w-64 px-4 py-4 text-blue-700 sticky top-0 left-0 overflow-y-scroll hide-scrollbar overflow-auto">
        <div className="flex flex-col mb-6 pb-4 border-b border-gray-300">
          <Link to="/" className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjSnLNj15Y3XFO3rlotSj1BzNU-kqk7Ek_g&s"
              alt="NSC"
              className="w-12 h-12 mr-3"
            />
            <div className="leading-none">
              <span className="text-2xl font-bold">EMIS</span>
              <br />
              <span className="text-sm">DASHBOARD</span>
            </div>
          </Link>
        </div>
        <div className="text-gray-500">
          <nav className="flex flex-col space-y-4">
            {/* Common Links for All Roles */}
            <Link
              to="/"
              className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
            >
              <FaHome className="mr-3" /> Dashboard
            </Link>

            

            

            {/* Links for Teacher and Student Roles */}
            {["Teacher", "Student"].includes(userRole) && (
              <>
              <Link
              to="/list-notice"
              className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
            >
              <FaClipboardList className="mr-3" /> Display Notice
            </Link>
                <Link
                  to="/create-complaint"
                  className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                >
                  <MdAnnouncement className="mr-3" /> Create Complaints
                </Link>

                <Link
                  to="/my-complaint"
                  className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                >
                  <MdAnnouncement className="mr-3" /> My Complaints
                </Link>
              </>
            )}
            {/* Teacher-Only Links */}
            {userRole === "Teacher" && (
              <>
              <Link
                      to="/create-assignment"
                      className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                    >
                      <MdAddAlert className="mr-3" /> Create Assignment
                    </Link>
                    </>
            )}

            {/* Admin-Only Links */}
            {userRole === "Admin" && (
              <>
              <div>
                  <button
                    onClick={handleActivityToggle}
                    className="flex items-center justify-between w-full hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <FaUsersCog className="mr-3" /> Roles{" "}
                    </div>
                    {activityOpen ? (
                      <MdArrowDropUp className="text-xl" />
                    ) : (
                      <MdArrowDropDown className="text-xl" />
                    )}
                  </button>
                  {activityOpen && (
                    <div className="flex flex-col space-y-2 pl-8 mt-2">
                      <Link
                        to="/create/role"
                        className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                      >
                        <MdPersonAdd className="mr-3" /> Create Role
                      </Link>

                      <Link
                        to="/list-roles"
                        className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                      >
                        <FaUserTag className="mr-3" /> Display Roles
                      </Link>
                    </div>
                  )}
                </div>
                 {/* Assignment Section */}
                 <button
                  onClick={handleAssignmentToggle}
                  className="flex items-center justify-between hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <FiBell className="mr-3" /> Assignment
                  </div>
                  {assignmentOpen ? (
                    <MdArrowDropUp className="text-xl" />
                  ) : (
                    <MdArrowDropDown className="text-xl" />
                  )}
                </button>
                {assignmentOpen && (
                  <div className="flex flex-col space-y-2 pl-8 mt-2">
                    <Link
                      to="/create-assignment"
                      className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                    >
                      <MdAddAlert className="mr-3" /> Create Assignment
                    </Link>

                    <Link
                      to="/list-assignment"
                      className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                    >
                      <IoMdAlert className="mr-3" /> Display Assignment
                    </Link>
                  </div>
                )}
                <button
              onClick={handleNoticeToggle}
              className="flex items-center justify-between hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <FiBell className="mr-3" /> Notice
              </div>
              {noticeOpen ? (
                <MdArrowDropUp className="text-xl" />
              ) : (
                <MdArrowDropDown className="text-xl" />
              )}
            </button>
            {noticeOpen && (
              <div className="flex flex-col space-y-2 pl-8 mt-2">
                <Link
                  to="/create-notice"
                  className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                >
                  <MdAddAlert className="mr-3" /> Create Notice
                </Link>
                <Link
                  to="/list-notice"
                  className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                >
                  <IoMdAlert className="mr-3" /> Display Notice
                </Link>
              </div>
            )}
            <button
              onClick={handleCreateUserToggle}
              className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
            >
              <FaUserCircle className="mr-3" /> Create User
            </button>

            

            <Link
              to="/user/list"
              className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
            >
              <MdGroup className="mr-3" /> List Users
            </Link>
            <Link
              to="/list/complaints"
              className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
            >
              <MdFeedback className="mr-3" /> Complaints
            </Link>
            <Link
              to="/create-attendance"
              className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
            >
              <FaClipboardList className="mr-3" /> Create Attendance
            </Link>


              </>
            )}
            {/* Links for Admin and Teacher Roles */}
            {["Admin", "Teacher"].includes(userRole) && (
              <>
              <Link
              to="/list-attendance"
              className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
            >
              <FaClipboardList className="mr-3" /> Attendance
            </Link>
               
                 

           


                {/* QnA Section */}
                <button
                  onClick={handleQnaToggle}
                  className="flex items-center justify-between hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <FaClipboardList className="mr-3" /> QnA
                  </div>
                  {qnaOpen ? (
                    <MdArrowDropUp className="text-xl" />
                  ) : (
                    <MdArrowDropDown className="text-xl" />
                  )}
                </button>
                {qnaOpen && (
                  <div className="flex flex-col space-y-2 pl-8 mt-2">
                    <Link
                      to="/create-qna"
                      className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                    >
                      <MdAddAlert className="mr-3" /> Create QnA
                    </Link>

                    <Link
                      to="/list-qna"
                      className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
                    >
                      <IoMdAlert className="mr-3" /> Display QnA
                    </Link>
                  </div>
                )}
              </>
            )}
            <Link
              to="/settings"
              className="flex items-center hover:bg-blue-500 hover:text-white p-2 rounded-lg transition-colors"
            >
              <FaCog className="mr-3" /> Settings
            </Link>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="p-4 rounded-lg max-w-lg w-full bg-white">
            <button
              onClick={handleCreateUserToggle}
              className="absolute top-4 right-8 text-black hover:text-gray-700 z-50 text-2xl"
            >
              &times;
            </button>
            <CreateUserPage />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
