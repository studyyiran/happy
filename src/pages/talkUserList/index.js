import React, { useState } from "react";

import "./index.less";

import { filters, data } from "./mockData";

import { Avatar, Divider } from "antd";

// console.log(filters, data);

export const TalkUserListPage = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const jumpToDetail = () => {
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
  const users = data.infoList.map((item, index) => (
    <div key={index} onClick={jumpToDetail}>
      <div className="userIntro">
        <Avatar shape="circle" src={item.avatar} />
        <div className="intro">
          <div>
            <span>{item.name}</span>
            <span className="sex">{item.sex}</span>
            <span className="sex">{item.level}</span>
          </div>
          <div>{item.intro}</div>
        </div>
      </div>
      <div className="data">
        <div className="item">
          <div>创作：</div>
          <div>{item.creationsSum}</div>
        </div>
        <div className="item">
          <div>获赞同：</div>
          <div>{item.likeSum}</div>
        </div>
        <div className="item">
          <div>盐值：</div>
          <div>{item.lastTalkSum}</div>
        </div>
        <div className="item">
          <div>总共聊过</div>
          <div>{item.talkSum}</div>
        </div>
      </div>
      <Divider></Divider>
    </div>
  ));
  return (
    <div className="talkUserList">
      <div className="title">{data.title}</div>
      <div className="tab">{tab}</div>
      <h2 className="listTitle">想要聊</h2>
      <div className="users">{users}</div>
    </div>
  );
};
