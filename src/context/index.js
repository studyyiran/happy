import React, { createContext, useReducer, useEffect } from "react";
import { useStoreZhiTalkGetActions } from "./useGetActions";
import { getFromStorage, saveIntoStorage } from "../common/utils";
import { hotTopic } from "./mockData";
export const StoreZhiTalkContext = createContext({});
export const StoreZhiTalk = "StoreZhiTalk";

// store provider
export function StoreZhiTalkContextProvider(props) {
  const initState = {
    hotTopic,
  };
  const [state, dispatch, useClientRepair] = useReducer(
    reducer,
    getFromStorage(StoreZhiTalk) || initState
  );
  const action = useStoreZhiTalkGetActions(state, dispatch);

  // 当 state 变更，就自动更新 storage
  useEffect(() => {
    saveIntoStorage(StoreZhiTalk, state);
  }, [state]);

  const propsValue = {
    ...action,
    useClientRepair,
    storeZhiTalkContextValue: state,
    storeZhiTalkContextDispatch: dispatch,
  };
  return <StoreZhiTalkContext.Provider value={propsValue} {...props} />;
}

// action types
export const storeZhiTalkReducerTypes = {
  setTodoList: "setTodoList",
};

// reducer
function reducer(state, action) {
  const { type, value } = action;
  let newState = { ...state };
  switch (type) {
    case storeZhiTalkReducerTypes.addNewTodo: {
      newState = {
        ...newState,
        todoList: value(newState),
      };
      break;
    }
    default:
      newState = { ...newState };
  }
  return newState;
}
