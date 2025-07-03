import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import userActivitySlice, { userActivityKey } from "./userActivitySlice";
import { setToLocalStorage } from "@/common/utils/localStorage";
import type { AppDispatch, RootReducerState } from "..";

export const userActivityListener = createListenerMiddleware();

userActivityListener.startListening.withTypes<RootReducerState, AppDispatch>()({
  matcher: isAnyOf(
    userActivitySlice.actions.incrementVisitCount,
    userActivitySlice.actions.setLastVisit,
  ),
  effect: (_, listenerApi) => {
    const state = listenerApi.getState();
    const userActivity = state.userActivity;

    setToLocalStorage(userActivityKey, userActivity);
  },
});

export default userActivityListener;
