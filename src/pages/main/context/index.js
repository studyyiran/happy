import React, { createContext, useReducer } from "react";
import { useStoreAjaxPageGetActions } from "./useGetActions";
export const StoreAjaxPageContext = createContext({});
export const StoreAjaxPage = "StoreAjaxPage";

// store provider
export function StoreAjaxPageContextProvider(props) {
  const initState = {
    todoList: [],
  };
  const [state, dispatch, useClientRepair] = useReducer(reducer, initState);
  const action = useStoreAjaxPageGetActions(state, dispatch);

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
        todoList: value,
      };
      break;
    }
    default:
      newState = { ...newState };
  }
  return newState;
}
