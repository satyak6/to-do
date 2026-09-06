import { useTheme } from "../context/ThemeContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function SettingsPage({ user }) {
    const { darkMode, toggleDarkMode } = useTheme();
    const { logout } = useAuth();

    const displayName =
        user?.displayName ||
        user?.email?.split("@")[0] ||
        "User";

    const initial = displayName.charAt(0).toUpperCase();

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Settings
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
                Manage your TaskFlow preferences.
            </p>

            <div className="mt-8 max-w-3xl space-y-5">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Profile
                    </h2>

                    <div className="flex items-center gap-4 mt-5">
                        <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold overflow-hidden">
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

                        <div>
                            <p className="font-semibold text-gray-900 dark:text-white">
                                {displayName}
                            </p>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {user?.email}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Appearance
                    </h2>

                    <div className="flex items-center justify-between mt-5">
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                                Dark Mode
                            </p>

                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Switch between light and dark appearance.
                            </p>
                        </div>

                        <button
                            onClick={toggleDarkMode}
                            className={`w-12 h-6 rounded-full p-1 transition ${
                                darkMode
                                    ? "bg-orange-500"
                                    : "bg-gray-300"
                            }`}
                        >
                            <div
                                className={`w-4 h-4 bg-white rounded-full transition-transform ${
                                    darkMode
                                        ? "translate-x-6"
                                        : "translate-x-0"
                                }`}
                            />
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Account
                    </h2>

                    <button
                        onClick={logout}
                        className="mt-5 px-5 py-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}