import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      {!user && (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </>
      )}

      {/* Private Routes */}
      {/* {user && (
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />

          <Route path="clients" element={<ClientsPage />} />
          <Route path="clients/create" element={<CreateClientPage />} />
          <Route path="clients/edit/:id" element={<EditClientPage />} />

          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/create" element={<CreateProjectPage />} />
          <Route path="projects/edit/:id" element={<EditProjectPage />} />

          <Route path="reminders" element={<RemindersPage />} />
          <Route path="reminders/create" element={<CreateReminderPage />} />

          <Route path="interactions" element={<InteractionsPage />} />
          <Route path="interactions/create" element={<CreateInteractionPage />} />

          <Route path="profile" element={<ProfilePage />} />
        </Route>
      )} */}

      {/* Redirect if wrong route */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      {!user && <Route path="*" element={<Navigate to="/login" replace />} />}
    </Routes>
  );
};

export default AppRoutes;
