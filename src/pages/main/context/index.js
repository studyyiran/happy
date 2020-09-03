import React, { createContext, useReducer, useEffect } from "react";
import { useStoreAjaxPageGetActions } from "./useGetActions";
import { getFromStorage, saveIntoStorage } from "../../../common/utils";
export const StoreAjaxPageContext = createContext({});
export const StoreZhiTalk = "StoreZhiTalk";

// store provider
export function StoreAjaxPageContextProvider(props) {
  const initState = {
    todoList: [],
  };
  const [state, dispatch, useClientRepair] = useReducer(
    reducer,
    getFromStorage(StoreZhiTalk) || initState
  );
  const action = useStoreAjaxPageGetActions(state, dispatch);

  // 当 state 变更，就自动更新 storage
  useEffect(() => {
    saveIntoStorage(StoreZhiTalk, state);
  }, [state]);

  const propsValue = {
    ...action,
    useClientRepair,
    storeAjaxPageContextValue: state,
    storeAjaxPageContextDispatch: dispatch,
  };
  return <StoreAjaxPageContext.Provider value={propsValue} {...props} />;
}

// action types
export const storeAjaxPageReducerTypes = {
  setTodoList: "setTodoList",
};

// reducer
function reducer(state, action) {
  const { type, value } = action;
  let newState = { ...state };
  switch (type) {
    case storeAjaxPageReducerTypes.addNewTodo: {
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
