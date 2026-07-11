export default function WelcomeCard({ openAddForm }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 sm:p-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
          👋 Welcome Back, Satya
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Stay productive today.
        </p>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">
          You've got tasks waiting.
        </p>
      </div>
    </div>
  );
}