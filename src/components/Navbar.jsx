function Navbar({ onMenuClick }) {
    return (
        <div className="fixed top-0 left-0 md:left-64 right-0 bg-zinc-200 flex items-center gap-3 sm:gap-6 p-4 sm:p-6 lg:p-8 z-10">
            <button
                onClick={onMenuClick}
                className="md:hidden bg-white p-2 rounded-lg shadow-md"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>
            <div className="shadow-sm flex items-center h-12 sm:h-14 flex-1 px-4 bg-white rounded-xl text-zinc-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-500"
                >
                    <path d="m21 21-4.34-4.34" />
                    <circle cx="11" cy="11" r="8" />
                </svg>
                <input
                    type="text"
                    placeholder="Search tasks..."
                    className="ml-3 flex-1 outline-none bg-transparent text-zinc-500 placeholder-zinc-500 text-sm sm:text-base"
                />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700"
                >
                    <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                    <path d="M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348" />
                    <circle cx="18" cy="5" r="3" />
                </svg>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold cursor-pointer">
                S
            </div>

        </div>
    );
}
export default Navbar;