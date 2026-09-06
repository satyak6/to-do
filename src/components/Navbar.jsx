import { Search, Bell, Menu } from "lucide-react";

function Navbar({ onMenuClick, user, search, setSearch }) {
    const displayName =
        user?.displayName ||
        user?.email?.split("@")[0] ||
        "User";

    const initial = displayName.charAt(0).toUpperCase();

    return (
        <div className="fixed top-0 left-0 md:left-64 right-0 bg-zinc-200 dark:bg-zinc-950 flex items-center gap-3 sm:gap-6 p-4 sm:p-6 lg:p-8 z-10">
            <button
                onClick={onMenuClick}
                className="md:hidden bg-white dark:bg-zinc-900 p-2 rounded-lg shadow-md"
            >
                <Menu size={22} className="dark:text-white" />
            </button>

            <div className="shadow-sm flex items-center h-12 sm:h-14 flex-1 px-4 bg-white dark:bg-zinc-900 rounded-xl text-zinc-500 dark:text-zinc-400">
                <Search
                    size={20}
                    className="text-zinc-500 dark:text-zinc-400 flex-shrink-0"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tasks..."
                    className="ml-3 flex-1 outline-none bg-transparent text-zinc-700 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 text-sm sm:text-base"
                />
            </div>

            <button
                type="button"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800 transition"
            >
                <Bell
                    size={20}
                    className="text-gray-700 dark:text-gray-200"
                />
            </button>

            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold cursor-pointer overflow-hidden">
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
        </div>
    );
}

export default Navbar;