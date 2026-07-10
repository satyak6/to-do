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
        <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">
          {editingId ? "✏️ Edit Task" : "➕ Add New Task"}
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Task Name
          </label>
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Due Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border hover:bg-gray-100"
          >
            Cancel
          </button>
  
          <button
            onClick={handleSubmit}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            {editingId ? "Update Task" : "Save Task"}
          </button>
        </div>
      </div>
    );
  }