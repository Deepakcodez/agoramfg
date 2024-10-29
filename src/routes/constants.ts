import {
  AboutUs,
  Capabilities,
  Career,
  Contact,
  Home,
  Products,
} from "@/pages";
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
  {
    href: "/about-us",
    page: AboutUs,
  },
  {
    href: "/products",
    page: Products,
  },
  {
    href: "/careers",
    page: Career,
  },
  {
    href: "/capabilities",
    page: Capabilities,
  },
  {
    href: "/contact",
    page: Contact,
  },
];

export { CLIENT_ROUTES };
