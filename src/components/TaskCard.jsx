import { Pencil, Trash2 } from "lucide-react";
export default function TaskCard({
    todo,
    onEdit,
    onDelete,
    onToggle,
}) {
    const priorityColor =
        todo.priority === "High"
            ? "bg-red-100 text-red-600"
            : todo.priority === "Medium"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600";
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition">
            <div className="flex items-center gap-4">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="w-5 h-5 accent-orange-500 cursor-pointer"
                />
                <div>
                    <h2
                        className={`text-lg font-semibold ${todo.completed
                                ? "line-through text-gray-400"
                                : ""
                            }`}
                    >
                        {todo.title}
                    </h2>
                    <div className="flex gap-3 mt-3">
                        <span
                            className={`px-3 py-1 rounded-full text-sm ${priorityColor}`}
                        >
                            {todo.priority}
                        </span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {new Date(todo.date).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </span>
                    </div>
                </div>

            </div>
            <div className="flex gap-4">
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
    );
}