import React, {useContext} from "react";
import './index.less';
import { Modal } from "antd";
import {StoreZhiTalkContext} from "../../context";

export const TalkPage = (props) => {
    const storeZhiTalkContext = useContext(StoreZhiTalkContext);
    const {
        storeZhiTalkContextValue,
    } = storeZhiTalkContext;
    const { currentTalkInfo } = storeZhiTalkContextValue;
    const { title } = currentTalkInfo;
  const nextHandler = () => {
      Modal.confirm({
          icon: null,
          content: <div>一场愉快的，高盐值的谈话结束了，是否需要转为「创作者素材」</div>,
          okText: "好的",
          cancelText: "稍后再说吧",
          onOk() {
              props.history.push('/editPage')
          },
          onCancel() {
          },
      })
  };
  return (
    <div className="talk-page" onClick={nextHandler}>
      <img className="bg" src={require('../../context/res/talk.png')}/>
      {/*<img className="button" />*/}
    </div>
  );
};
