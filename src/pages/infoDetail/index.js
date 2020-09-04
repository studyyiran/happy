import React, { useContext, useState } from "react";
import { message } from "antd";

import { Button } from "antd";

import "./index.less";
import { StoreZhiTalkContext } from "../../context";

export const InfoDetailPage = (props) => {
  const storeZhiTalkContext = useContext(StoreZhiTalkContext);
  const { storeZhiTalkContextValue } = storeZhiTalkContext;
  const { currentFriendInfo, currentTalkInfo } = storeZhiTalkContextValue;
  const { img } = currentFriendInfo;
  const [haveInvite, setHaveInvite] = useState(false);

  return (
    <div className="InfoDetailPage">
      <img className="info" src={img} />
      <div className="button">
        <Button
          type="primary"
          onClick={() => {
            message.info(`不再看Ta「${currentTalkInfo.title}」建立的创作室了`);
          }}
        >
          不感兴趣
        </Button>
        <Button
          type="primary"
          onClick={() => {
            if (haveInvite) {
              return;
            }
            setHaveInvite(true);
            message.success("已成功发出邀请，10 分钟内将会答复");
            window.setTimeout(() => {
              props.history.push("/userPickPage");
            }, 1500);
          }}
        >
          {haveInvite ? "已经邀请" : "发起邀请"}
        </Button>
      </div>
    </div>
  );
};
