import React, {useState} from "react";
import './index.less';
import { Modal } from "antd";

export const SharePage = (props) => {
    const [havePost, setHavePost] = useState(false)
  const nextHandler = () => {
      if (havePost) {
          return
      }
      Modal.confirm({
          icon: null,
          content: <div>即将提交人工审核，请确定内容 ok 哦。</div>,
          okText: "提交",
          cancelText: "再等等",
          onOk() {
              setHavePost(true)
          },
          onCancel() {
          },
      })
  };
  return (
    <div className="editPage">
      <img className="bg" src={require('../../context/res/article.png')}/>

      {/* <button onClick={nextHandler} >{havePost ? "已提交" : "提交审核"}</button> */}
      {/*<img className="button" />*/}
    </div>
  );
};
