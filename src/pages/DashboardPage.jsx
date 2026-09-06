import Dashboard from "../components/Dashboard.jsx";

export default function DashboardPage({
    user,
    filter = "dashboard",
    searchQuery = "",
}) {
    return (
        <Dashboard
            user={user}
            filter={filter}
            searchQuery={searchQuery}
        />
    );
}