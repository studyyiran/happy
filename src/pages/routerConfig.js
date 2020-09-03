import React from "react";

import { MainPage } from "./main";
import { SubPage } from "./sub";
import { TalkUserListPage } from "./talkUserList";

export const routerConfig = [
  {
    path: "/main",
    title: "main",
    Component: MainPage,
  },
  {
    path: "/sub",
    title: "sub",
    Component: SubPage,
  },
  {
    path: "/talkUserList",
    title: "知聊用户",
    Component: TalkUserListPage,
  },
];
