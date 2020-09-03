import React from "react";

import { MainPage } from "./main";
import { SubPage } from "./sub";
import { HomePage } from "./home";
import { RankPage } from "./rank";
import { TalkUserListPage } from "./talkUserList";
import { InfoDetailPage } from "./infoDetail";

export const routerConfig = [
  {
    path: "/main",
    title: "main",
    Component: MainPage,
  },
  {
    path: "/home",
    title: "home",
    Component: HomePage,
  },
  {
    path: "/rank",
    title: "rank",
    Component: RankPage,
  },
  {
    path: "/talkUserList",
    title: "知聊用户",
    Component: TalkUserListPage,
  },
  {
    path: "/userDetail",
    title: "知聊用户详情",
    Component: InfoDetailPage,
  },
];
