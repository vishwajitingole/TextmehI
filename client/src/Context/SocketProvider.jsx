// SocketProvider.js
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setSocket } from "./store";
import { io } from "socket.io-client";

const SocketProvider = (props) => {
  const dispatch = useDispatch();
  const socket = useMemo(() => io("localhost:3000"), []);

  // Generate a unique identifier for the socket
  const socketId = "uniqueSocketId"; // You can use any method to generate a unique id

  // Dispatch action to set socket in Redux store
  dispatch(setSocket({ id: socketId, socket }));

  return (
    <SocketContext.Provider value={{ socket, socketId }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
