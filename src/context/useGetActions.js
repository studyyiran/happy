import React, { useCallback } from "react";
import { storeZhiTalkReducerTypes } from "./index";

// useCreateActions
export function useStoreZhiTalkGetActions(state, dispatch) {
  return {
    addNewTodo: useCallback(
      async function (content) {
        dispatch({
          type: storeZhiTalkReducerTypes.addNewTodo,
          value: (state) => {
            return [
              ...state.todoList,
              {
                isFinish: false,
                content,
              },
            ];
          },
        });
      },
      [dispatch]
    ),
  };
}
