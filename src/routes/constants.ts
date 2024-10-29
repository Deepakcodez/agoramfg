import { Home } from "@/pages";
import React from "react";


interface RoutDocument {
  href: string;
  page: React.FC;
  children?: RoutDocument[];
}

const CLIENT_ROUTES: RoutDocument[] = [
  {
    href: "",
    page: Home,
  },
 
];

export { CLIENT_ROUTES };
