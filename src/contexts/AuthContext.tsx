import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/user";
import { authService } from "../services/authService";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userData = await authService.login(email, password);
      setUser(userData); // Ensure userData is of type User
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Login failed", error);
      // Handle error (e.g., show a message to the user)
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const userData = await authService.signup(email, password);
      setUser(userData); // Ensure userData is of type User
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Signup failed", error);
      // Handle error (e.g., show a message to the user)
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
