// SocketProvider.js
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setSocketId } from "./store";
import { io } from "socket.io-client";

const SocketProvider = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io("localhost:3000");
    dispatch(setSocketId(socket.id)); // Store the socket ID in Redux
    // Additional logic as needed
    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return <>{props.children}</>;
};

export default SocketProvider;
