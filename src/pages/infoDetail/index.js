import React, { useContext, useState } from "react";

import { Button } from "antd";

import "./index.less";
import { StoreZhiTalkContext } from "../../context";

export const InfoDetailPage = (props) => {
  const storeZhiTalkContext = useContext(StoreZhiTalkContext);
  const { storeZhiTalkContextValue } = storeZhiTalkContext;
  const { currentFriendInfo } = storeZhiTalkContextValue;
  const { img } = currentFriendInfo;

  return (
    <div className="InfoDetailPage">
      <img className="info" src={img} />
      <div className="button">
        <Button type="primary">不感兴趣</Button>
        <Button type="primary">发起邀请</Button>
      </div>
    </div>
  );
};
