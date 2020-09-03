import React, { useContext, useState } from "react";
import { Input, List, Typography } from "antd";
import "../home/index.less";
import { StoreZhiTalkContext } from "../../context";

export const TopicPage = () => {
  const storeZhiTalkContext = useContext(StoreZhiTalkContext);
  const { storeZhiTalkContextValue } = storeZhiTalkContext;
  const { hotTopic } = storeZhiTalkContextValue;
  const { Search } = Input;
  const listData = hotTopic;
  const [data, setData] = useState(listData);
  console.log(data, "22433");

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
          header={<div>热门话题榜</div>}
          footer={<div>我是有底线的！</div>}
          bordered
          dataSource={data}
          renderItem={(item, index) => (
            <a href="https://www.baidu.com">
              <List.Item>
                <Typography.Text mark>{index + 1}</Typography.Text> {item.title}
              </List.Item>
            </a>
          )}
        />
      </div>
    </div>
  );
};