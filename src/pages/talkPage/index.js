import React from "react";
import './index.less';
import { Modal } from "antd";

export const TalkPage = (props) => {
  const nextHandler = () => {
      Modal.confirm({
          icon: null,
          content: <div>一场愉快的，高盐值的谈话结束了，是否需要转为「创作者素材」</div>,
          okText: "好的",
          cancelText: "稍后再说吧",
          onOk() {
              props.history.push('123')
          },
          onCancel() {
          },
      })
  };
  return (
    <div className="talk-page">
      <img className="bg" src={require('../../context/res/wechat.jpg')}/>
      <button onClick={nextHandler} >结束知聊</button>
      {/*<img className="button" />*/}
    </div>
  );
};
