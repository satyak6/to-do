import { Pencil, Trash2 } from "lucide-react";

export default function TaskCard({
    todo,
    onEdit,
    onDelete,
    onToggle,
}) {
    const priorityColor =
        todo.priority === "High"
            ? "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
            : todo.priority === "Medium"
            ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400"
            : "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400";

    const formattedDate = todo.date
        ? new Date(todo.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
          })
        : "No date";

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-4 sm:p-5 hover:shadow-lg transition duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex items-start gap-4 flex-1">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)}
                        className="w-5 h-5 accent-orange-500 cursor-pointer mt-1"
                    />

                    <div className="flex-1">
                        <h2
                            className={`text-base sm:text-lg font-semibold break-words text-gray-900 dark:text-white ${
                                todo.completed
                                    ? "line-through text-gray-400 dark:text-gray-500"
                                    : ""
                            }`}
                        >
                            {todo.title}
                        </h2>

                        <div className="flex flex-wrap gap-2 mt-3">
                            <span
                                className={`px-3 py-1 rounded-full text-xs sm:text-sm ${priorityColor}`}
                            >
                                {todo.priority}
                            </span>

                            <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm">
                                {formattedDate}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4 sm:gap-5">
                    <button
                        onClick={() => onEdit(todo)}
                        className="text-blue-500 hover:scale-110 transition"
                    >
                        <Pencil size={20} />
                    </button>

                    <button
                        onClick={() => onDelete(todo.id)}
                        className="text-red-500 hover:scale-110 transition"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}