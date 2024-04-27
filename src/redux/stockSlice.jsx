import { createSlice } from "@reduxjs/toolkit";
import { stocks } from "../utils/data";

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    id: "",
    title: "",
    startDate: "",
    endDate: "",
    status: "",
    data: stocks,
  },
  reducers: {
    setToStocks: (state, action) => {
      const { title, startDate, endDate, status, data } = state;
      const newId = new Date().getTime().toString().slice(1, 10);
      console.log(newId);

      const stockNew = {
        id: Number(newId),
        title: title,
        startDate: startDate,
        endDate: endDate,
        status: status,
      };

      data.push(stockNew);
    },
  },
});

export const { openSideBar } = stockSlice.actions;
export default stockSlice.reducer;
