import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null, // Initially, no socket object
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
});

export const { setSocket } = socketSlice.actions;

export const selectSocket = (state) => state.socket;

export default configureStore({
  reducer: {
    socket: socketSlice.reducer,
  },
});
