import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/admin/dashboard/Dashboard";
import { Brands } from "../pages/admin/dashboard/Brands";
import { Categories } from "../pages/admin/dashboard/Categories";
import { Products } from "../pages/admin/dashboard/Products";
import { Login } from "../pages/admin/auth/Login";
import { Index } from "../pages/client/Index";
import { CreateBrand } from "../pages/admin/dashboard/Brands/CreateBrand";
import { EditBrand } from "../pages/admin/dashboard/Brands/EditBrand";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />

      {/*RUTAS PARA DASHBOARD*/}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/brands" element={<Brands />} />
      <Route path="/dashboard/brands/create" element={<CreateBrand />} />
      <Route path="/dashboard/brands/edit/:id" element={<EditBrand />} /> 
      <Route path="/dashboard/categories" element={<Categories />} />
      <Route path="/dashboard/products" element={<Products />} />

      <Route path="/login" element={<Login />} />
      
    </Routes>
  );
};

export default AppRoutes;
