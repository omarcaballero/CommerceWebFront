import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/admin/Dashboard";
import { Login } from "../auth/Login";
import { Index } from "../pages/client/Index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
