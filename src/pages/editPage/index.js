import React from "react";
import './index.less';
import { Modal } from "antd";

export const EditPage = (props) => {
  const nextHandler = () => {
      Modal.confirm({
          icon: null,
          content: <div>是否编辑完毕？</div>,
          okText: "编辑好了",
          cancelText: "再等等",
          onOk() {
              window.history.push('/sharePage')
          },
          onCancel() {
          },
      })
  };
  return (
    <div className="editPage">
        <div>编辑室</div>
      <img className="bg" src={require('../../context/res/editPage.jpg')}/>
      <button onClick={nextHandler} >结束编辑</button>
      {/*<img className="button" />*/}
    </div>
  );
};
