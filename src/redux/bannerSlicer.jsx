import { createSlice } from "@reduxjs/toolkit";
import { bannerArray } from "../utils/data";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    key: "",
    uzbTitle: "",
    rusTitle: "",
    status: "",
    bannerImage: "",
    data: bannerArray,
  },
  reducers: {
    saveBanners: (state, action) => {
      const { key, uzbTitle } = action.payload;
      const existingBannerIndex = state.data.findIndex(
        (item) => item.key === key
      );

      if (existingBannerIndex !== -1) {
        state.data = state.data.map((item, index) => {
          if (index === existingBannerIndex) {
            return {
              ...item,
              uzbTitle: uzbTitle || item.uzbTitle,
            };
          }
          return item;
        });
      }
    },

    indetifyKey: (state, action) => {
      const { key } = action.payload;

      const existingBanner = state.data.find((item) => item.key === key);

      if (existingBanner) {
        const { status, uzbTitle, rusTitle, bannerImage } = existingBanner;

        return {
          ...state,
          status: status || "",
          uzbTitle: uzbTitle || "",
          rusTitle: rusTitle || "",
          bannerImage: bannerImage || "",
        };
      }
    },

    updateUzbekTitle: (state, action) => {
      state.uzbTitle = action.payload;
    },
    updateRusTitle: (state, action) => {
      state.rusTitle = action.payload;
    },
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
    updateImage: (state, action) => {
      state.bannerImage = action.payload;
    },
  },
});

export const {
  saveBanners,
  updateUzbekTitle,
  indetifyKey,
  updateRusTitle,
  updateStatus,
  updateImage,
} = bannerSlice.actions;

export default bannerSlice.reducer;
