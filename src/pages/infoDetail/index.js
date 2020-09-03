import React, {useState} from "react";


import { Button } from 'antd';

import './index.less'

export const InfoDetailPage = (props) => {
 
  return (
    <div className="InfoDetailPage">
      <img className="info" src="https://pic1.zhimg.com/v2-71f1dc858173bf0eb933275f414d947d.png" />
      <div className="button">
        <Button type="primary">不感兴趣</Button>
        <Button type="primary">发起邀请</Button>
      </div>
    </div>
  );
};
