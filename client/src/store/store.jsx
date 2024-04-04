// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  socketId: null, // Store the socket identifier
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocketId: (state, action) => {
      state.socketId = action.payload;
    },
  },
});

export const { setSocketId } = socketSlice.actions;

export const selectSocketId = (state) => state.socket.socketId;

export default configureStore({
  reducer: {
    socket: socketSlice.reducer,
  },
});
