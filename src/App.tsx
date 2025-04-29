import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "./pages/Dashboard";
import ClientsPage from "./pages/client/ClientsPage";
import CreateClientPage from "./pages/client/CreateClientPage";
import EditClientPage from "./pages/client/EditClientPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import CreateProjectPage from "./pages/projects/CreateProjectPage";
import EditProjectPage from "./pages/projects/EditProjectPage";
import { useAuthContext } from "./contexts/AuthContext";

const AppRoutes = () => {
  const { user } = useAuthContext();

  return (
    <Routes>
      {/* Public Routes */}
      {!user && (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </>
      )}

      {/* Redirect logged-in users trying to access login/signup */}
      {user && (
        <>
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/signup" element={<Navigate to="/" replace />} />
        </>
      )}

      {/* Private Routes */}
      {user && (
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />

          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/clients/create" element={<CreateClientPage />} />
          <Route path="/clients/edit/:id" element={<EditClientPage />} />

          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/create" element={<CreateProjectPage />} />
          <Route path="/projects/edit/:id" element={<EditProjectPage />} />
        </Route>
      )}

      {/* Redirect if wrong route */}
      <Route
        path="*"
        element={<Navigate to={user ? "/" : "/login"} replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
