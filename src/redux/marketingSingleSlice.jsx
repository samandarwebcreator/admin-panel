import { createSlice } from "@reduxjs/toolkit";
import { stocksArray } from "../utils/data";

const initialState = {
  key: "",
  title: "",
  startDate: "",
  endDate: "",
  status: "",
  image: "",
  stocks: stocksArray,
};

const marketingSlice = createSlice({
  name: "marketing",
  initialState,
  reducers: {
    addStock: (state, action) => {
      state.stocks.push(action.payload);
    },

    saveStocks: (state) => {
      const updatedItemIndex = state.stocks.findIndex(
        (item) => item.key === state.key
      );

      if (updatedItemIndex !== -1) {
        state.stocks[updatedItemIndex] = {
          ...state.stocks[updatedItemIndex],
          title: state.title,
          startDate: state.startDate,
          endDate: state.endDate,
          status: state.status,
          image: state.image,
        };

        console.log(state.stocks[updatedItemIndex]);
      }

      console.log(state.stocks);
    },

    updateKey: (state, action) => {
      state.key = action.payload;

      const { key, title, startDate, endDate, stockImage, status } =
        state.stocks.find((item) => item.key === action.payload) || {};

      state.title = title || "";
      state.startDate = startDate || "";
      state.endDate = endDate || "";
      state.status = status || "";
      state.image = stockImage || "";
    },
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    updateEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
    updateImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const {
  addStock,
  deleteStock,
  saveStocks,
  updateTitle,
  updateKey,
  updateStartDate,
  updateEndDate,
  updateStatus,
  updateImage,
} = marketingSlice.actions;

export default marketingSlice.reducer;
