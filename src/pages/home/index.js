import React, { useState } from "react";
import { Input, List, Typography } from "antd";
import "./index.less";

export const HomePage = (props) => {
  const { Search } = Input;
  const listData = [
    "印度称中印在边境部署的坦克，都已进入对方的射程内，释放了什么信号 ？",
    "如何看待美国男演员巨石强森确诊新冠肺炎，其妻女也中招 ？",
    "如何看待温州新人海边拍婚纱照，新娘被海浪卷走，已致2死1失联，有哪些能够保障安全的措施 ？",
    "有哪些学校听着野鸡，其实是个正经大学 ？",
    "你体验过哪些汽车上的「真香」智能配置 ？",
    "你如何看待三体将被拍剧版 ？",
    "挪威的森林里你对那句话印象最深 ？",
    "如何看待电影小妇人劳里和乔 ？",
    "好莱坞电影花木兰即将上映，你会去看吗 ？",
  ];
  console.log(listData, "111");
  const [data, setData] = useState(listData);
  console.log(data, "22433");

  // const data = [
  //   '印度称中印在边境部署的坦克，都已进入对方的射程内，释放了什么信号 ？',
  //   '如何看待美国男演员巨石强森确诊新冠肺炎，其妻女也中招 ？',
  //   '如何看待温州新人海边拍婚纱照，新娘被海浪卷走，已致2死1失联，有哪些能够保障安全的措施 ？',
  //   '有哪些学校听着野鸡，其实是个正经大学 ？',
  //   '你体验过哪些汽车上的「真香」智能配置 ？',
  //   '你如何看待三体将被拍剧版 ？',
  //   '挪威的森林里你对那句话印象最深 ？',
  //   '如何看待电影小妇人劳里和乔 ？',
  //   '好莱坞电影花木兰即将上映，你会去看吗 ？'
  // ];
  const viewIndex = (index) => {
    console.log(index, "68999");
  };
  const search = (value) => {
    let filterList = listData.filter(
      (item) => item.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    console.log(filterList, "3456");
    setData(filterList);
  };

  const onChaneValue = (e) => {
    console.log(e.target.value, "33333");
  };
  return (
    <div className="main">
      <div className="search">
        <Search
          placeholder="搜索知聊话题"
          style={{ width: 260 }}
          onSearch={(value) => search(value)}
        ></Search>
      </div>
      <div className="sub">
        <List
          header={<div>知聊话题热榜</div>}
          footer={<div>我是有底线的！</div>}
          bordered
          dataSource={data}
          renderItem={(item, index) => (
            <div
              onClick={() => {
                props.history.push("/topic");
              }}
            >
              <List.Item onClick={viewIndex(index)}>
                <Typography.Text mark>{index + 1}</Typography.Text> {item}
              </List.Item>
            </div>
          )}
        />
      </div>
    </div>
  );
};
