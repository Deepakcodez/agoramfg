import {
  AboutUs,
  Career,
  Contact,
  Home,
  Products,
} from "@/pages";
import { Assembly, Capabilitylayout, Design, Form, Laser, Paint, Ship, Weld } from "@/pages/capabilities";
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
    href: "capabilities",
    page: Capabilitylayout,
    children: [
      {
        href: "design",
        page: Design,
      },
      {
        href: "laser",
        page: Laser,
      },
      {
        href: "paint",
        page: Paint,
      },
      {
        href: "ship",
        page: Ship,
      },
      {
        href: "weld",
        page: Weld,
      },
      {
        href: "assembly",
        page: Assembly,
      },
      {
        href: "form",
        page: Form,
      },
    ],
  },
  {
    href: "/contact",
    page: Contact,
  },
];

export { CLIENT_ROUTES };
