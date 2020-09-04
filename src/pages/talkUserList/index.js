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
      style={{padding: '12px', background: '#fff', marginBottom: '12px'}}
      className="userCt"
      key={index}
      onClick={() => {
        jumpToDetail(item.infoImg);
      }}
    >
      <div className="userIntro">
        <Avatar shape="circle" src={item.avatar} size={50} />
        <div className="intro">
          <div className="basicInfo">
            <div className="shrink">
            <span className="name">{item.name}</span>
            <img src={require(`../../context/res/${item.sex === '男' ? 'man' : 'woman'}.png`)} className="sex"></img>
            </div>
            <span className="score">知聊分：{item.level}</span>
          </div>
          <div className="des">个人描述：{item.intro}</div>
        </div>
      </div>
      <div className="data">
        <div className="item">
          <div className="des">创作</div>
          <div className="num">{item.creationsSum}</div>
        </div>
        <div className="item">
          <div className="des">获赞同</div>
          <div className="num">{item.likeSum}</div>
        </div>
        <div className="item" style={{ border: "none" }}>
          <div  className="des">好友标签</div>
          <div className="text">{item.zhihuTag.join(",")}</div>
        </div>
        {/*<div className="item">*/}
        {/*  <div>总共聊过</div>*/}
        {/*  <div>{item.zhihuTag.join(",")}</div>*/}
        {/*</div>*/}
      </div>
    </div>
  ));
  return (
    <div className="talkUserList">
      <div className="title"><span className="titleLimit">{title}</span></div>
      <div className="border"></div>
      <div className="tab">{tab}</div>
      <div className="users">{users}</div>
    </div>
  );
};
