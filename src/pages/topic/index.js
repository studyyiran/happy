import React, { useContext, useState } from "react";
import { Input, List, Typography, Button, Modal} from "antd";
import "../home/index.less";
import { StoreZhiTalkContext } from "../../context";

export const TopicPage = (props) => {
  const storeZhiTalkContext = useContext(StoreZhiTalkContext);
  const { storeZhiTalkContextValue, setCurrentTalkInfo } = storeZhiTalkContext;
  const { hotTopic } = storeZhiTalkContextValue;
  const { Search } = Input;
  const listData = hotTopic;
  const [data, setData] = useState(listData);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

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

  const handleAdd = () => {
    setVisible(true)
  }
  const handleCancel = () => {
    setVisible(false)
  }

  const handleOk = () => {
    const data = [].concat(listData)
    const topic = data.find((v) => {
      return v.title === value
    })
    if(topic) {
      topic.people = topic.people + 1
    } else {
      data.push({title: value, totalPeople: 1})
    }
    setData(data)
    handleCancel()
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

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
         <Button type="primary" shape="circle" onClick={handleAdd}><div className="add">+</div></Button>
        </div> 
      <div className="search">
        <Search
          placeholder="搜索知聊话题"
          style={{ width: 260 }}
          onSearch={(value) => search(value)}
        ></Search>
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
                <div style={{position:'absolute',right:'20px',display:'inline',color:'dodgerblue'}}>{item.totalPeople}</div> 
              </List.Item>
            </div>
          )}
        />
      </div>
      <Modal
          title="发起话题"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          onText="保存"
          onCancelText="取消"
        >
          <Input placeholder="一句话描述你想要聊的话题" onChange={handleChange} />
        </Modal>
    </div>
  );
};
