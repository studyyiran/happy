import React from "react";

import { MainPage } from "./main";
import { SubPage } from "./sub";
import { HomePage } from "./home";
import { TopicPage } from "./topic";
import { TalkUserListPage } from "./talkUserList";
import { InfoDetailPage } from "./infoDetail";

export const routerConfig = [
  {
    path: "/home",
    title: "home",
    Component: HomePage,
  },
  {
    path: "/topic",
    title: "话题",
    Component: TopicPage,
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
