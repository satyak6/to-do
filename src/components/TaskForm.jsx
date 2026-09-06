export default function TaskForm({
    task,
    setTask,
    priority,
    setPriority,
    date,
    setDate,
    editingId,
    handleSubmit,
    onClose,
}) {
    return (
        <div className="p-5 sm:p-6 bg-white dark:bg-zinc-900 rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                {editingId ? "✏️ Edit Task" : "➕ Add New Task"}
            </h2>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Task Name
                </label>

                <input
                    type="text"
                    placeholder="Enter your task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="w-full border border-gray-300 dark:border-zinc-700 rounded-lg p-3 outline-none bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-orange-400"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Priority
                </label>

                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full border border-gray-300 dark:border-zinc-700 rounded-lg p-3 outline-none bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-400"
                >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Due Date
                </label>

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border border-gray-300 dark:border-zinc-700 rounded-lg p-3 outline-none bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-400"
                />
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
                <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-5 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                >
                    Cancel
                </button>

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full sm:w-auto bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
                >
                    {editingId ? "Update Task" : "Save Task"}
                </button>
            </div>
        </div>
    );
}