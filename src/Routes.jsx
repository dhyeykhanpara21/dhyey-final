import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Typography = React.lazy(() => import("pages/Typography"));
const Colorsused = React.lazy(() => import("pages/Colorsused"));
const OrdersOne = React.lazy(() => import("pages/OrdersOne"));
const Orders = React.lazy(() => import("pages/Orders"));
const AddSupplier = React.lazy(() => import("pages/AddSupplier"));
const Suppliers = React.lazy(() => import("pages/Suppliers"));
const ProductInfo = React.lazy(() => import("pages/ProductInfo"));
const InventoryOne = React.lazy(() => import("pages/InventoryOne"));
const Inventory = React.lazy(() => import("pages/Inventory"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventoryone" element={<InventoryOne />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/addsupplier" element={<AddSupplier />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/ordersone" element={<OrdersOne />} />
          <Route path="/colorsused" element={<Colorsused />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
