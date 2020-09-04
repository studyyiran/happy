import React, { useContext, useState } from "react";
import { Input, List, Typography, Button } from "antd";
import "../home/index.less";
import { StoreZhiTalkContext } from "../../context";

export const TopicPage = (props) => {
  const storeZhiTalkContext = useContext(StoreZhiTalkContext);
  const { storeZhiTalkContextValue, setCurrentTalkInfo } = storeZhiTalkContext;
  const { hotTopic } = storeZhiTalkContextValue;
  const { Search } = Input;
  const listData = hotTopic;
  const [data, setData] = useState(listData);
  console.log(hotTopic);
  // console.log(data, "22433");

  const viewIndex = (index) => {
    // console.log(index, "68999");
  };
  const search = (value) => {
    let filterList = listData.filter(
      (item) => item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    // console.log(filterList, "3456");
    setData(filterList);
  };

  return (
    <div className="main">
      <div className="header">
        <div className="search">
          <Search
            placeholder="搜索知聊话题"
            style={{ width: 260 }}
            onSearch={(value) => search(value)}
          ></Search>
        </div>
        <div className="addTopic">
          <Button type="primary" shape="circle">
            <div className="add">+</div>
          </Button>
        </div>
      </div>
      <div className="sub">
        <List
          header={<div>热门话题榜</div>}
          footer={<div>我是有底线的！</div>}
          bordered
          dataSource={data}
          renderItem={(item, index) => (
            <div
              onClick={() => {
                setCurrentTalkInfo(index);
                props.history.push("/talkUserList");
              }}
            >
              <List.Item>
                <Typography.Text mark>{index + 1}</Typography.Text> {item.title}
                <div style={{position:'absolute',left:'80%',display:'inline',color:'dodgerblue'}}>{item.totalPeople}</div> 
              </List.Item>
            </div>
          )}
        />
      </div>
    </div>
  );
};
