export default function WelcomeCard({ openAddForm }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">
          👋 Welcome Back, Satya
        </h1>
        <p className="text-gray-500 mt-2">
          Stay productive today.
        </p>
        <p className="text-gray-500 mt-2">You've got tasks waiting.</p>
      </div>
    </div>
  );
}