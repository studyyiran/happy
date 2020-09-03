import React from "react";
import { MainPage } from "./main";
import { SubPage } from "./sub";

export const routerConfig = [
  {
    path: "/main",
    title: "main",
    Component: MainPage,
  },
  {
    path: "/sub",
    title: "sub",
    Component: SubPage
  }
];
