function Navbar(){
    return(
        <div className="fixed top-0 left-64 right-0 bg-zinc-200 flex items-center gap-6 p-8 z-10">
        <div className="search shadow-sm flex items-center h-14 flex-1 px-4 bg-white rounded-xl text-zinc-500">
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
                className="ml-3 flex-1 outline-none bg-transparent text-zinc-500 placeholder-zinc-500"
            />
        </div>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
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
                className="text-gray-700"
            >
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348" />
                <circle cx="18" cy="5" r="3" />
            </svg>
        </div>
        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold cursor-pointer">
            S
        </div>
    </div>
    );
    }
    export default Navbar;