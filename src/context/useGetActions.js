import React, { useCallback } from "react";
import { storeZhiTalkReducerTypes } from "./index";
import { userInfoArr } from "./mockData";

// useCreateActions
export function useStoreZhiTalkGetActions(state, dispatch) {
  return {
    setCurrentTalkInfo: useCallback(
      async function (index) {
        const talkInfo = {
          id: index,
          title: state.hotTopic[index].title,
          userList: userInfoArr,
        };
        dispatch({
          type: storeZhiTalkReducerTypes.setCurrentTalkInfo,
          value: talkInfo,
        });
      },
      [dispatch, state.hotTopic]
    ),

    setCurrentFriendInfo: useCallback(
      async function (img) {
        dispatch({
          type: storeZhiTalkReducerTypes.setCurrentFriendInfo,
          value: {
            img,
          },
        });
      },
      [dispatch]
    ),
  };
}
