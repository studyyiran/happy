import React, { createContext, useReducer, useEffect } from "react";
import { useStoreZhiTalkGetActions } from "./useGetActions";
import { getFromStorage, saveIntoStorage } from "../common/utils";
import { hotTopic, userInfoArr } from "./mockData";
export const StoreZhiTalkContext = createContext({});
export const StoreZhiTalk = "StoreZhiTalk";

// store provider
export function StoreZhiTalkContextProvider(props) {
  const initState = {
    hotTopic,
    currentTalkInfo: {
      id: 0,
      title: hotTopic[0].title,
      userList: userInfoArr,
    },
    currentFriendInfo: {
      img: require("./res/default.jpeg"),
    },
  };
  const [state, dispatch, useClientRepair] = useReducer(reducer, initState);
  const action = useStoreZhiTalkGetActions(state, dispatch);

  // 当 state 变更，就自动更新 storage
  // useEffect(() => {
  //   saveIntoStorage(StoreZhiTalk, state);
  // }, [state]);

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
  setCurrentTalkInfo: "setCurrentTalkInfo",
  setCurrentFriendInfo: "setCurrentFriendInfo",
};

// reducer
function reducer(state, action) {
  const { type, value } = action;
  let newState = { ...state };
  switch (type) {
    case storeZhiTalkReducerTypes.setCurrentTalkInfo: {
      newState = {
        ...newState,
        currentTalkInfo: value,
      };
      break;
    }
    case storeZhiTalkReducerTypes.setCurrentFriendInfo: {
      newState = {
        ...newState,
        currentFriendInfo: value,
      };
      break;
    }
    default:
      newState = { ...newState };
  }
  return newState;
}
