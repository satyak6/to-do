export default function WelcomeCard({ user }) {
  const displayName =
      user?.displayName ||
      user?.email?.split("@")[0] ||
      "User";

  return (
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-5 sm:p-8">
          <div>
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-900 dark:text-white">
                  👋 Welcome Back, {displayName}
              </h1>

              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
                  Stay productive today.
              </p>

              <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm sm:text-base">
                  You've got tasks waiting.
              </p>
          </div>
      </div>
  );
}