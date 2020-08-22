import React, { useCallback } from "react";
import { storeAjaxPageReducerTypes } from "./index";

// useCreateActions
export function useStoreAjaxPageGetActions(state, dispatch) {
  return {
    addNewTodo: useCallback(
      async function (content) {
        // save()
        console.log(content);
        dispatch({
          type: storeAjaxPageReducerTypes.addNewTodo,
          value: [
            ...state.todoList,
            {
              isFinish: false,
              content,
            },
          ],
        });
      },
      [dispatch, state.todoList]
    ),
  };
}
