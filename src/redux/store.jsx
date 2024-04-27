import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import generalSlice from "./generalSlice";
import marketingSingleSlice from "./marketingSingleSlice";
import bannerSlicer from "./bannerSlicer";

const store = configureStore({
  reducer: {
    general: generalSlice,
    auth: authReducer,
    marketingSingle: marketingSingleSlice,
    banner: bannerSlicer,
  },
});

export default store;
