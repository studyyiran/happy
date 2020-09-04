import React from "react";

import { HomePage } from "./home";
import { TopicPage } from "./topic";
import { TalkUserListPage } from "./talkUserList";
import { InfoDetailPage } from "./infoDetail";
import { UserPickPage } from "./userPickPage";

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
  {
    path: "/userPickPage",
    title: "用户选择页面",
    Component: UserPickPage,
  },
];
