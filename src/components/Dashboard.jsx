import { useState } from "react";
import WelcomeCard from "./WelcomeCard";
import StatsCard from "./StatsCard";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
export default function Dashboard() {
    const [todos, setTodos] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [date, setDate] = useState("");
    const [editingId, setEditingId] = useState(null);
    const completedTasks = todos.filter((todo) => todo.completed).length;
    const pendingTasks = todos.filter((todo) => !todo.completed).length;
    const productivity =
        todos.length === 0
            ? 0
            : Math.round((completedTasks / todos.length) * 100);
    const openAddForm = () => {
        setShowForm(true);
        setEditingId(null);
        setTask("");
        setPriority("Medium");
        setDate("");
    };
    const openEditForm = (todo) => {
        setShowForm(true);
        setEditingId(todo.id);
        setTask(todo.title);
        setPriority(todo.priority);
        setDate(todo.date);
    };
    const handleSubmit = () => {
        if (task.trim() === "") return;
        if (editingId) {
            setTodos(
                todos.map((todo) =>
                    todo.id === editingId
                        ? {
                              ...todo,
                              title: task,
                              priority,
                              date,
                          }
                        : todo
                )
            );
        } else {
            const newTodo = {
                id: Date.now(),
                title: task,
                priority,
                date,
                completed: false,
            };
            setTodos([...todos, newTodo]);
        }
        setShowForm(false);
        setEditingId(null);
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <WelcomeCard openAddForm={openAddForm} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
                <StatsCard
                    title="Completed"
                    value={completedTasks}
                    color="text-green-500"
                    icon="✅"
                />
                <StatsCard
                    title="Pending"
                    value={pendingTasks}
                    color="text-orange-500"
                    icon="⏳"
                />
                <StatsCard
                    title="Productivity"
                    value={`${productivity}%`}
                    color="text-blue-500"
                    icon="📈"
                />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-10">
                <h1 className="text-xl sm:text-2xl font-semibold">
                    Today's Tasks
                </h1>
                <button
                    onClick={openAddForm}
                    className="w-full sm:w-auto bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition"
                >
                    + Add Task
                </button>
            </div>
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
                        <TaskForm
                            task={task}
                            setTask={setTask}
                            priority={priority}
                            setPriority={setPriority}
                            date={date}
                            setDate={setDate}
                            editingId={editingId}
                            handleSubmit={handleSubmit}
                            onClose={() => setShowForm(false)}
                        />
                    </div>
                </div>
            )}
            <div className="space-y-5 mt-6">
                {todos.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 text-center">
                        <h2 className="text-xl sm:text-2xl font-semibold">
                            🎉 No tasks yet
                        </h2>
                        <p className="text-gray-500 mt-3 text-sm sm:text-base">
                            Click{" "}
                            <span className="font-semibold text-orange-500">
                                + Add Task
                            </span>{" "}
                            to create your first task.
                        </p>
                    </div>
                ) : (
                    todos.map((todo) => (
                        <TaskCard
                            key={todo.id}
                            todo={todo}
                            onEdit={openEditForm}
                            onDelete={deleteTodo}
                            onToggle={toggleComplete}
                        />
                    ))
                )}
            </div>
        </div>
    );
}