import { useEffect, useState } from "react";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";

import WelcomeCard from "./WelcomeCard";
import StatsCard from "./StatsCard";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import { db } from "../services/firebase";

export default function Dashboard({
    user,
    filter = "dashboard",
    searchQuery = "",
}) {
    const [todos, setTodos] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [date, setDate] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [loadError, setLoadError] = useState("");

    useEffect(() => {
        if (!user?.uid) {
            setTodos([]);
            return;
        }

        setLoadError("");

        const tasksRef = collection(
            db,
            "users",
            user.uid,
            "tasks"
        );

        const unsubscribe = onSnapshot(
            tasksRef,
            (snapshot) => {
                const tasks = snapshot.docs.map((taskDoc) => {
                    const data = taskDoc.data();

                    return {
                        id: taskDoc.id,
                        ...data,

                        // Support both old and new task field names
                        title: data.title || data.task || "",
                        priority: data.priority || "Medium",
                        date: data.date || "",
                        completed: data.completed === true,
                    };
                });

                tasks.sort((a, b) => {
                    const aTime = a.createdAt?.seconds || 0;
                    const bTime = b.createdAt?.seconds || 0;

                    return bTime - aTime;
                });

                setTodos(tasks);
            },
            (error) => {
                console.error("Firestore read error:", error);
                setLoadError(error.message);
                setTodos([]);
            }
        );

        return () => unsubscribe();
    }, [user?.uid]);

    const completedTasks = todos.filter(
        (todo) => todo.completed
    ).length;

    const pendingTasks = todos.filter(
        (todo) => !todo.completed
    ).length;

    const productivity =
        todos.length === 0
            ? 0
            : Math.round(
                (completedTasks / todos.length) * 100
            );

    const filteredByPage =
        filter === "completed"
            ? todos.filter((todo) => todo.completed)
            : todos.filter((todo) => !todo.completed);

    const visibleTodos = filteredByPage.filter((todo) =>
        (todo.title || "")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    const pageTitle =
        filter === "completed"
            ? "Completed Tasks"
            : filter === "all"
                ? "My Tasks"
                : "Today's Tasks";

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
        setTask(todo.title || "");
        setPriority(todo.priority || "Medium");
        setDate(todo.date || "");
    };

    const handleSubmit = async () => {
        if (!task.trim() || !user?.uid) return;

        try {
            if (editingId) {
                await updateDoc(
                    doc(
                        db,
                        "users",
                        user.uid,
                        "tasks",
                        editingId
                    ),
                    {
                        title: task.trim(),
                        priority,
                        date,
                    }
                );
            } else {
                await addDoc(
                    collection(
                        db,
                        "users",
                        user.uid,
                        "tasks"
                    ),
                    {
                        title: task.trim(),
                        priority,
                        date,
                        completed: false,
                        createdAt: serverTimestamp(),
                    }
                );
            }

            setShowForm(false);
            setEditingId(null);
            setTask("");
            setPriority("Medium");
            setDate("");
        } catch (error) {
            console.error("Error saving task:", error);

            alert(
                "Unable to save the task. Please try again."
            );
        }
    };

    const deleteTodo = async (id) => {
        if (!user?.uid) return;

        try {
            await deleteDoc(
                doc(
                    db,
                    "users",
                    user.uid,
                    "tasks",
                    id
                )
            );
        } catch (error) {
            console.error("Error deleting task:", error);

            alert(
                "Unable to delete the task. Please try again."
            );
        }
    };

    const toggleComplete = async (id) => {
        if (!user?.uid) return;

        const todo = todos.find(
            (item) => item.id === id
        );

        if (!todo) return;

        try {
            await updateDoc(
                doc(
                    db,
                    "users",
                    user.uid,
                    "tasks",
                    id
                ),
                {
                    completed: !todo.completed,
                }
            );
        } catch (error) {
            console.error(
                "Error updating task:",
                error
            );

            alert(
                "Unable to update the task. Please try again."
            );
        }
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            {filter === "dashboard" && (
                <>
                    <WelcomeCard
                        user={user}
                    />

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
                </>
            )}

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-10">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                    {pageTitle}
                </h1>

                <button
                    onClick={openAddForm}
                    className="w-full sm:w-auto bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition"
                >
                    + Add Task
                </button>
            </div>

            {loadError && (
                <div className="mt-5 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 rounded-xl p-4 text-sm">
                    <strong>Firestore Error:</strong>{" "}
                    {loadError}
                </div>
            )}

            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl w-full max-w-lg">
                        <TaskForm
                            task={task}
                            setTask={setTask}
                            priority={priority}
                            setPriority={setPriority}
                            date={date}
                            setDate={setDate}
                            editingId={editingId}
                            handleSubmit={handleSubmit}
                            onClose={() => {
                                setShowForm(false);
                                setEditingId(null);
                            }}
                        />
                    </div>
                </div>
            )}

            <div className="space-y-5 mt-6">
                {visibleTodos.length === 0 ? (
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 sm:p-10 text-center">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                            {searchQuery
                                ? "🔍 No matching tasks"
                                : filter === "completed"
                                    ? "🎉 No completed tasks"
                                    : "🎉 No tasks yet"}
                        </h2>

                        <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm sm:text-base">
                            {searchQuery
                                ? `No tasks found for "${searchQuery}".`
                                : filter === "completed"
                                    ? "Complete some tasks and they will appear here."
                                    : "Click "}

                            {!searchQuery &&
                                filter !== "completed" && (
                                    <>
                                        <span className="font-semibold text-orange-500">
                                            + Add Task
                                        </span>{" "}
                                        to create your first task.
                                    </>
                                )}
                        </p>
                    </div>
                ) : (
                    visibleTodos.map((todo) => (
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