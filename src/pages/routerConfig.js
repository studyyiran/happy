import React from "react";
import { MainPage } from "./main";
import { SubPage } from "./sub";
import { HomePage } from "./home";
import { RankPage } from "./rank"

export const routerConfig = [
  {
    path: "/main",
    title: "main",
    Component: MainPage
},
{
    path: "/sub",
    title: "sub",
    Component: SubPage
},
{
    path: "/home",
    title: "home",
    Component: HomePage
},
{
    path:"/rank",
    title: "rank",
    Component: RankPage
}
];
