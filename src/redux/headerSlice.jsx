// import { createSlice } from "@reduxjs/toolkit";
// import { orders } from "../utils/data";

// const headerSlice = createSlice({
//   name: "header",
//   initialState: {
//     customerName: "",
//     userId: "",
//     orderId: "",
//     orderTime: "00:00:00",
//     price: "0 сум",
//     deliverer: "",
//     deliveryType: "",
//     deliveryAddress: "",
//     type: "",
//     userNumber: "",
//     customerType: "",
//     data: orders,
//   },

//   reducers: {
//     setLocalStorage: (state, action) => {
//       const {
//         customerName,
//         userId,
//         userNumber,
//         orderId,
//         orderTime,
//         price,
//         deliverer,
//         deliveryType,
//         deliveryAddress,
//         customerType,
//         data,
//       } = state;

//       const obj = {
//         customerName: "",
//         customerType: "",
//         userId: "",
//         orderId: "",
//         orderTime: "00:00:00",
//         price: "0 сум",
//         deliverer: "",
//         deliveryType: "",
//         deliveryAddress: "",
//         type: "",
//         userNumber: "",
//       };

//       data.push(obj);
//     },
//   },
// });

// export default headerSlice.reducer;
