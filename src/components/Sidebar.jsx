import {
    LayoutDashboard,
    CheckSquare,
    CheckCircle2,
    Settings,
    User,
  } from "lucide-react";
function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 w-64 h-screen bg-white shadow-md flex flex-col justify-between p-6">
            <div>
                <h1 className="text-4xl font-bold text-orange-500 mb-10">
                    TaskFlow
                </h1>
                <ul className="space-y-4 transition-all duration-200">
                    <li className="flex items-center gap-4 p-3 rounded-xl text-xl hover:bg-zinc-200 cursor-pointer transition hover:translate--1.5">
                        <LayoutDashboard size={30} />
                        <span>Dashboard</span>
                    </li>
                    <li className="flex items-center gap-4 p-3 rounded-xl text-xl hover:bg-zinc-200 cursor-pointer transition hover:translate--1.5">
                        <CheckSquare size={30} />
                        <span>My Tasks</span>
                    </li>
                    <li className="flex items-center gap-4 p-3 rounded-xl text-xl hover:bg-zinc-200 cursor-pointer transition hover:translate--1.5">
                        <CheckCircle2 size={30} />
                        <span>Completed</span>
                    </li>
                    <li className="flex items-center gap-4 p-3 rounded-xl text-xl hover:bg-zinc-200 cursor-pointer transition hover:translate--1.5">
                        <Settings size={30} />
                        <span>Settings</span>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white hover:bg-zinc-200  cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
                    S
                </div>
                <div>
                    <p className="font-medium">Satya Kailasa</p>
                    <p className="text-sm text-gray-500">@satya kailasa</p>
                </div>
            </div>
        </aside>
    );
}
export default Sidebar;
