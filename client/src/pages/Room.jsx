import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "./Room.css";

function Room() {
  const { roomid } = useParams();
  const m = useRef(null);
  const [stack, setStack] = useState([]);
  const [mystack, setMyStack] = useState([]);
  const socket = useSelector((e) => e.socket.socket);

  useEffect(() => {
    socket.on("sentall", handleReceiveMessage);

    return () => {
      socket.off("sentall", handleReceiveMessage);
    };
  }, [socket]);

  function handleSend() {
    const message = m.current.value;
    socket.emit("all", { message });
    setMyStack((prevStack) => [...prevStack, message]);
    m.current.value = ""; // Clear input field after sending message
  }

  function handleReceiveMessage(data) {
    const { message } = data;
    setStack((prevStack) => [...prevStack, message]);
  }

  return (
    <div className="relative w-screen h-screen text-white bg-gray-900">
      <div className="pt-10 text-center">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-3xl font-bold"
        >
          Room Page
        </motion.h1>
        <div className="">
          <motion.button
            onClick={handleSend}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.96 }}
            className="absolute bottom-4 left-[82vw] p-2 rounded-lg sm:left-[95vw] bg-slate-400"
          >
            Send
          </motion.button>
        </div>
        <div className="">
          <input
            ref={m}
            type="text"
            className="absolute font-bold tracking-widest  bottom-4 text-black px-3 rounded-xl w-[80vw] sm:w-[94vw]  left-0 h-[6vh]  "
          />
        </div>

        <div
          className="text-red-500 chat-window"
          style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          {stack.map((e, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              key={i}
              className="px-3 ml-5 overflow-auto text-2xl text-left"
            >
              <div className="text-left">{e}</div>
            </motion.div>
          ))}
          {mystack.map((e, i) => (
            <div key={i} className="">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="px-3 mt-3 ml-5 overflow-auto text-2xl text-right "
              >
                <div className="text-right">{e}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Room;
