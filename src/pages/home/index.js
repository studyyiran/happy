import React, { useState } from "react";
import { Input, List, Typography } from "antd";
import "./index.less";

export const HomePage = (props) => {
  const { Search } = Input;
  const listData = [
    "中国电影",
    "历史名著",
    "假如我穿越了",
    "三体硬科幻爱好者",
    "世界这么大，我想去看看",
    "2020 5G手机值得买",
    "失恋这件小事",
    "生活中最戏精的一次",
    "好莱坞电影花木兰看了不喜欢",
  ];
  const [data, setData] = useState(listData);
  
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
      <div className="homeSearch">
        <Search
          placeholder="搜索知聊话题"
          className="input"
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
