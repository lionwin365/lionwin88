import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <div className="text-xl font-bold">LionWin88</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
