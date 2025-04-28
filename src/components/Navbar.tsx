import { useAuthContext } from "../contexts/AuthContext";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const { logout } = useAuthContext();

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
