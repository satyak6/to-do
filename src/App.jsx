import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-zinc-200">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-1 bg-zinc-200 md:ml-64 pt-20 sm:pt-24">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <Dashboard />
      </div>
    </div>
  );
}
export default App;