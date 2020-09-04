import React, { useContext, useState } from "react";
import { Modal } from "antd";

import { Button } from "antd";

import "./index.less";
import { StoreZhiTalkContext } from "../../context";
//
const rule = [
  `知聊开始后，前 5 分钟聊得不开心可以随时退出。`,
  `知聊是知识和经验的 1 对 1 交流分享`,
  `您的语言性得体会影响到盐值`,
];

export const UserPickPage = (props) => {
  const storeZhiTalkContext = useContext(StoreZhiTalkContext);
  const { storeZhiTalkContextValue } = storeZhiTalkContext;
  const { currentFriendInfo, currentTalkInfo } = storeZhiTalkContextValue;
  const { img } = currentFriendInfo;
  const [visible, setVisible] = useState(false);

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div className="userPickPage">
      <div className="container" onClick={() => {
            setVisible(true);
          }}>
        <img className="img" src={require("../../context/res/agrgre.png")} />
      </div>
      <Modal
        title="知聊提示"
        visible={visible}
        okText="开始知聊"
        cancelText="了解了"
        onOk={() => {
          props.history.push("/talkPage");
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        {rule.map((item) => {
          return <div>{item}</div>;
        })}
      </Modal>
    </div>
  );
};
