import React from "react";
import { Route } from "react-router-dom";
import AdminLayout from "../admin/layouts/AdminLayout";
import Dashboard from "../admin/Pages/Dashboard";
import Users from "../admin/Pages/Users";
import Login from "../admin/Pages/Login";
import Products from "../admin/Pages/Products";
import Categories from "../admin/Pages/Categories";

const AdminRouter = () => (
  <>
    <Route path="/admin/login" element={<Login />} />
    <Route
      path="/admin"
      element={
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      }
    />
    <Route
      path="/admin/users"
      element={
        <AdminLayout>
          <Users />
        </AdminLayout>
      }
    />
    <Route
      path="/admin/products"
      element={
        <AdminLayout>
          <Products />
        </AdminLayout>
      }
    />
    <Route
      path="/admin/categories"
      element={
        <AdminLayout>
          <Categories />
        </AdminLayout>
      }
    />
  </>
);

export default AdminRouter;
