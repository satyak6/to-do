import {
    LayoutDashboard,
    CheckSquare,
    CheckCircle2,
    Settings,
    X,
  } from "lucide-react";
  function Sidebar({ sidebarOpen, setSidebarOpen }) {
    return (
      <>
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        <aside
          className={`
            fixed left-0 top-0 h-screen w-64 bg-white shadow-md
            flex flex-col justify-between p-6 z-50
            transform transition-transform duration-300
            ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }
            md:translate-x-0
          `}
        >
          <div>
            <div className="flex justify-between items-center md:block">
              <h1 className="text-4xl font-bold text-orange-500 mb-8">
                TaskFlow
              </h1>
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden"
              >
                <X size={28} />
              </button>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 p-3 rounded-xl text-lg hover:bg-zinc-200 cursor-pointer transition">
                <LayoutDashboard size={26} />
                <span>Dashboard</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-xl text-lg hover:bg-zinc-200 cursor-pointer transition">
                <CheckSquare size={26} />
                <span>My Tasks</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-xl text-lg hover:bg-zinc-200 cursor-pointer transition">
                <CheckCircle2 size={26} />
                <span>Completed</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-xl text-lg hover:bg-zinc-200 cursor-pointer transition">
                <Settings size={26} />
                <span>Settings</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-zinc-200 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
              S
            </div>
  
            <div>
              <p className="font-medium">Satya Kailasa</p>
              <p className="text-sm text-gray-500">@satya_kailasa</p>
            </div>
          </div>
        </aside>
      </>
    );
  }
  export default Sidebar;