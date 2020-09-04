import React, {useState} from "react";
import './index.less';
import { Modal, message } from "antd";

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
              message.info('创作提交完成！')
          },
          onCancel() {
          },
      })
  };
  return (
    <div className="editPage">
      <img className="bg" onClick={nextHandler} src={require('../../context/res/article.png')}/>

      {/* <button  >{havePost ? "已提交" : "提交审核"}</button> */}
      {/*<img className="button" />*/}
    </div>
  );
};
