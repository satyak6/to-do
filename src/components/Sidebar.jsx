import {
  LayoutDashboard,
  CheckSquare,
  CheckCircle2,
  Settings,
  X,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  user,
  activePage,
  onNavigate,
}) {
  const { darkMode, toggleDarkMode } = useTheme();

  const displayName =
      user?.displayName ||
      user?.email?.split("@")[0] ||
      "User";

  const email = user?.email || "";
  const initial = displayName.charAt(0).toUpperCase();

  const closeMobileSidebar = () => {
      setSidebarOpen(false);
  };

  const handleNavigate = (page) => {
      onNavigate(page);
      closeMobileSidebar();
  };

  const navItemClass = (page) =>
      `flex items-center gap-4 p-3 rounded-xl text-lg cursor-pointer transition ${
          activePage === page
              ? "bg-orange-50 dark:bg-orange-500/10 text-orange-500"
              : "text-gray-700 dark:text-gray-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
      }`;

  return (
      <>
          {sidebarOpen && (
              <div
                  className="fixed inset-0 bg-black/40 z-40 md:hidden"
                  onClick={closeMobileSidebar}
              />
          )}

          <aside
              className={`
                  fixed left-0 top-0 h-screen w-64
                  bg-white dark:bg-zinc-900
                  shadow-md flex flex-col justify-between
                  p-6 z-50
                  transform transition-transform duration-300
                  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                  md:translate-x-0
              `}
          >
              <div>
                  <div className="flex justify-between items-center md:block">
                      <h1 className="text-4xl font-bold text-orange-500 mb-8">
                          TaskFlow
                      </h1>

                      <button
                          onClick={closeMobileSidebar}
                          className="md:hidden text-gray-700 dark:text-gray-200"
                      >
                          <X size={28} />
                      </button>
                  </div>

                  <ul className="space-y-3">
                      <li
                          onClick={() => handleNavigate("dashboard")}
                          className={navItemClass("dashboard")}
                      >
                          <LayoutDashboard size={26} />
                          <span>Dashboard</span>
                      </li>

                      <li
                          onClick={() => handleNavigate("tasks")}
                          className={navItemClass("tasks")}
                      >
                          <CheckSquare size={26} />
                          <span>My Tasks</span>
                      </li>

                      <li
                          onClick={() => handleNavigate("completed")}
                          className={navItemClass("completed")}
                      >
                          <CheckCircle2 size={26} />
                          <span>Completed</span>
                      </li>

                      <li
                          onClick={() => handleNavigate("settings")}
                          className={navItemClass("settings")}
                      >
                          <Settings size={26} />
                          <span>Settings</span>
                      </li>
                  </ul>
              </div>

              <div>
                  <button
                      onClick={toggleDarkMode}
                      className="w-full flex items-center justify-between p-3 mb-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
                  >
                      <div className="flex items-center gap-4">
                          {darkMode ? (
                              <Sun size={22} />
                          ) : (
                              <Moon size={22} />
                          )}

                          <span>
                              {darkMode ? "Light Mode" : "Dark Mode"}
                          </span>
                      </div>

                      <div
                          className={`w-10 h-5 rounded-full p-0.5 transition ${
                              darkMode
                                  ? "bg-orange-500"
                                  : "bg-gray-300"
                          }`}
                      >
                          <div
                              className={`w-4 h-4 bg-white rounded-full transition-transform ${
                                  darkMode
                                      ? "translate-x-5"
                                      : "translate-x-0"
                              }`}
                          />
                      </div>
                  </button>

                  <div className="flex items-center gap-3 p-3 rounded-2xl">
                      <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold overflow-hidden">
                          {user?.photoURL ? (
                              <img
                                  src={user.photoURL}
                                  alt="Profile"
                                  className="w-full h-full object-cover"
                              />
                          ) : (
                              initial
                          )}
                      </div>

                      <div className="min-w-0">
                          <p className="font-medium text-gray-800 dark:text-white truncate">
                              {displayName}
                          </p>

                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                              {email}
                          </p>
                      </div>
                  </div>
              </div>
          </aside>
      </>
  );
}

export default Sidebar;