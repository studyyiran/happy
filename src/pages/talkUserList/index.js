import React, { useContext, useState } from "react";

import "./index.less";

import { Avatar, Divider } from "antd";
import { StoreZhiTalkContext } from "../../context";

const filters = [
  {
    filterName: "曾经聊过",
  },
  {
    filterName: "3分钟内发布",
  },
  {
    filterName: "90后",
  },
  {
    filterName: "相同爱好",
  },
  {
    filterName: "高盐值",
  },
];

export const TalkUserListPage = (props) => {
  const storeZhiTalkContext = useContext(StoreZhiTalkContext);
  const {
    storeZhiTalkContextValue,
    setCurrentFriendInfo,
  } = storeZhiTalkContext;
  const { currentTalkInfo } = storeZhiTalkContextValue;
  const { title, userList } = currentTalkInfo;
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const jumpToDetail = (img) => {
    setCurrentFriendInfo(img);
    props.history.push("/userDetail");
  };
  const tab = filters.map((item, index) => (
    <div
      key={index}
      className={activeTab === index ? "normal active" : "normal"}
      onClick={() => handleTabClick(index)}
    >
      {item.filterName}
    </div>
  ));
  const users = userList.map((item, index) => (
    <div
      key={index}
      onClick={() => {
        jumpToDetail(item.infoImg);
      }}
    >
      <div className="userIntro">
        <Avatar shape="circle" src={item.avatar} />
        <div className="intro">
          <div>
            <span>用户名：{item.name}</span>
            <span className="sex">性别：{item.sex}</span>
            <span className="sex">知聊分：{item.level}</span>
          </div>
          <div>个人描述：{item.intro}</div>
        </div>
      </div>
      <div className="data">
        <div className="item">
          <div>创作</div>
          <div>{item.creationsSum}</div>
        </div>
        <div className="item">
          <div>获赞同</div>
          <div>{item.likeSum}</div>
        </div>
        <div className="item" style={{'border': 'none'}}>
          <div>好友标签</div>
          <div>{item.zhihuTag.join(",")}</div>
        </div>
        {/*<div className="item">*/}
        {/*  <div>总共聊过</div>*/}
        {/*  <div>{item.zhihuTag.join(",")}</div>*/}
        {/*</div>*/}
      </div>
      <Divider></Divider>
    </div>
  ));
  return (
    <div className="talkUserList">
      <div className="title">{title}</div>
      <div className="tab">{tab}</div>
      <h2 className="listTitle">想要聊</h2>
      <div className="users">{users}</div>
    </div>
  );
};
