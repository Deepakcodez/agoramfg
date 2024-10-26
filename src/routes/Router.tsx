import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CLIENT_ROUTES } from "./constants";
import { NotFoundPage } from "@/components";
import ClientLayout from "@/layout/client/ClientLayout";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
        
        {/* Public/Admin Auth Routes */}
        <Route path="/" element={<ClientLayout />}>
          {CLIENT_ROUTES.map((route, i) => (
            <Route
              key={`CLIENT_ROUTE_${i}`}
              path={route.href}
              element={React.createElement(route.page)}
            />
          ))}
        </Route>

        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
