import React from "react";

import { HomePage } from "./home";
import { TopicPage } from "./topic";
import { TalkUserListPage } from "./talkUserList";
import { InfoDetailPage } from "./infoDetail";
import { UserPickPage } from "./userPickPage";
import { TalkPage } from "./talkPage";

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
    title: "准备开始一场知聊",
    Component: UserPickPage,
  },
  {
    path: "/talkPage",
    title: "创作室",
    Component: TalkPage,
  },
  {
    path: "/editPage",
    title: "创作室",
    Component: UserPickPage,
  },
  {
    path: "/sharePage",
    title: "创作室",
    Component: UserPickPage,
  },
];
