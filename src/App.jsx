import './App.css'
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar
      
      />
      <div className="flex-1 bg-zinc-200 ml-64 pt-24">
        <Navbar/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
