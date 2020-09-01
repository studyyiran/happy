import React, { useContext, useState } from "react";
import { StoreAjaxPageContext } from "./context";
import { Button } from "antd";
import Svg from "../../common/components/svg";

export const MainPage = () => {
  const storeAjaxPageContext = useContext(StoreAjaxPageContext);
  const { storeAjaxPageContextValue, addNewTodo } = storeAjaxPageContext;
  const { todoList } = storeAjaxPageContextValue;
  return (
    <div>
      <Add
        onAddHandler={(todoContent) => {
          addNewTodo(todoContent);
        }}
      />
      <ul>
        {todoList.map(({ isFinish, content }) => {
          return (
            <li>
              <div>是否完成：{isFinish ? <Svg icon="correct" /> : <Svg />}</div>
              <div>{content}</div>
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
};

const Add = ({ onAddHandler }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div>
        <input
          value={value}
          onChange={(e) => {
            {
              setValue(e.target.value);
            }
          }}
        />
        <Button
          onClick={() => {
            onAddHandler(value);
          }}
        >
          添加+
        </Button>
      </div>
    </div>
  );
};
