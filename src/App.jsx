import { useState } from "react";
import "./App.css";

import { useAuth } from "./context/AuthContext.jsx";

import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "/Users/satya/Desktop/to-do-main/src/context/SettingsPage.jsx";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState("dashboard");
    const [search, setSearch] = useState("");

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-200 dark:bg-zinc-950">
                <p className="text-gray-500 dark:text-gray-400">
                    Loading...
                </p>
            </div>
        );
    }

    if (!user) {
        return <LoginPage />;
    }

    const handleNavigate = (page) => {
        setActivePage(page);
        setSidebarOpen(false);
        setSearch("");
    };

    const renderPage = () => {
        switch (activePage) {
            case "dashboard":
                return (
                    <DashboardPage
                        user={user}
                        searchQuery={search}
                    />
                );

            case "tasks":
                return (
                    <DashboardPage
                        user={user}
                        filter="all"
                        searchQuery={search}
                    />
                );

            case "completed":
                return (
                    <DashboardPage
                        user={user}
                        filter="completed"
                        searchQuery={search}
                    />
                );

            case "settings":
                return <SettingsPage user={user} />;

            default:
                return (
                    <DashboardPage
                        user={user}
                        searchQuery={search}
                    />
                );
        }
    };

    return (
        <div className="flex min-h-screen bg-zinc-200 dark:bg-zinc-950">
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                user={user}
                activePage={activePage}
                onNavigate={handleNavigate}
            />

            <div className="flex-1 md:ml-64 pt-20 sm:pt-24">
                <Navbar
                    onMenuClick={() => setSidebarOpen(true)}
                    user={user}
                    search={search}
                    setSearch={setSearch}
                />

                {renderPage()}
            </div>
        </div>
    );
}

export default App;