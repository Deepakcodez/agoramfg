import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CLIENT_ROUTES } from "./constants";
import { NotFoundPage } from "@/components";
import ClientLayout from "@/layout/client/ClientLayout";

interface RoutDocument {
  href: string;
  page: React.FC;
  children?: RoutDocument[];
}

// Helper function to render nested routes
const renderRoutes = (routes: RoutDocument[]) => {
  return routes.map((route, i) => (
    <Route
      key={`CLIENT_ROUTE_${i}`}
      path={route.href}
      element={React.createElement(route.page)}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Public/Admin Auth Routes */}
        <Route path="/" element={<ClientLayout />}>
          {renderRoutes(CLIENT_ROUTES)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
