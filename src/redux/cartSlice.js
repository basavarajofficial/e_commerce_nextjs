const { createSlice } = require("@reduxjs/toolkit");

let initialState = {
  productData: [],
  userInfo: null,
  orderData: [],
};
const cartSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    increaseQty: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },

    decreaseQty: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
    },

    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    reset: (state) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    saveOrder: (state, action) => {
      state.orderData = action.payload;
    },
    resetOrder : (state) => {
      state.orderData = [];
    }
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  deleteItem,
  reset,
  addUser,
  deleteUser,
  saveOrder,
resetOrder
} = cartSlice.actions;

export default cartSlice.reducer;
