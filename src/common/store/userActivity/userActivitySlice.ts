import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserActivity = {
  visitCount: number;
  lastVisit: string | null;
};

const initialUserActivityState: UserActivity = {
  visitCount: 0,
  lastVisit: null,
};

export const userActivityKey = "userActivity";

export const userActivitySlice = createSlice({
  name: userActivityKey,
  initialState: initialUserActivityState,
  reducers: {
    incrementVisitCount: (state) => {
      state.visitCount += 1;
    },
    setLastVisit: (state, action: PayloadAction<string>) => {
      state.lastVisit = action.payload;
    },
  },
  selectors: {
    selectUserActivity: (state: UserActivity) => state,
  },
});

export const { incrementVisitCount, setLastVisit } = userActivitySlice.actions;
export const { selectUserActivity } = userActivitySlice.selectors;
export default userActivitySlice;
