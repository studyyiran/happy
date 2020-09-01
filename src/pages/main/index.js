import React, { useContext, useState } from "react";
import { StoreAjaxPageContext } from "./context";
import { Button } from "antd";

export const MainPage = () => {
  const storeAjaxPageContext = useContext(StoreAjaxPageContext);
  const { storeAjaxPageContextValue, addNewTodo } = storeAjaxPageContext;
  const { todoList } = storeAjaxPageContextValue;
  console.log(todoList);
  return (
    <div>
      <Add
        onAddHandler={(todoContent) => {
          addNewTodo(todoContent);
        }}
      />
    </div>
  );
};

const Add = ({ onAddHandler }) => {
  const [value, setValue] = useState();
  return (
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
  );
};
