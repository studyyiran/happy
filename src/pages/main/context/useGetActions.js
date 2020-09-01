import React, { useCallback } from "react";
import { storeAjaxPageReducerTypes } from "./index";

// useCreateActions
export function useStoreAjaxPageGetActions(state, dispatch) {
  return {
    addNewTodo: useCallback(
      async function (content) {
        dispatch({
          type: storeAjaxPageReducerTypes.addNewTodo,
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
