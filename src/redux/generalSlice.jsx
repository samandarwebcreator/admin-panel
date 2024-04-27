import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marketingSidebar: true,
  marketingSingleId: "",
  changedTab: "",
};

const headerSlice = createSlice({
  name: "general",
  initialState,

  reducers: {
    openSideBar: (state) => {
      state.marketingSidebar = !state.marketingSidebar;
    },

    setAsMarketingId: (state, action) => {
      state.marketingSingleId = action.payload;
    },

    changeDashboardTab: (state, action) => {
      state.changedTab = action.payload;
    },
  },
});

export const { openSideBar, setAsMarketingId, changeDashboardTab } =
  headerSlice.actions;
export default headerSlice.reducer;

export { initialState };
