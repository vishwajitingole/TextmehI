import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSocket } from "./store";
import { io } from "socket.io-client";

const SocketProvider = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io("https://video-call-1-3anu.onrender.com");

    socket.on("connect", () => {
      console.log("Socket connected!");
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    dispatch(setSocket(socket));

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return <>{props.children}</>;
};

export default SocketProvider;
