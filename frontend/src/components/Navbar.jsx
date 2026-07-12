import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-white/80 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
          StudentAI
        </h1>

        <div className="space-x-8 hidden md:flex font-medium">
          <Link to="/" className="hover:text-violet-600 transition">
            Home
          </Link>

          <Link to="/dashboard" className="hover:text-violet-600 transition">
            Dashboard
          </Link>

          <Link to="/analyze" className="hover:text-violet-600 transition">
            Analyze
          </Link>

          <Link to="/reports" className="hover:text-violet-600 transition">
            Reports
          </Link>

          <Link to="/about" className="hover:text-violet-600 transition">
            About
          </Link>
        </div>

        <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition duration-300 shadow-lg">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;