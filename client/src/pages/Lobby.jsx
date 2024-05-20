import { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Three from "../3d/Three";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosHelp, IoMdHelpCircle } from "react-icons/io";

function Lobby() {
  const email = useRef(null);
  const room = useRef(null);
  const nav = useNavigate();

  const socket = useSelector((state) => state.socket.socket);

  const handleSubmit = (e) => {
    e.preventDefault();
    const r = room.current.value;
    const em = email.current.value;

    localStorage.setItem("email", em);

    socket.emit("join", { em, r });
    nav(`/room/${socket.id}`);
  };
  const handleVideo = (e) => {
    e.preventDefault();
    const r = room.current.value;
    const em = email.current.value;

    socket.emit("join", { em, r });
    nav(`/videoroom/${socket.id}`);
  };
  const notify = () => toast("Join using Same Room Number ");

  useEffect(() => {
    setTimeout(() => {
      socket.on("join", handleJoinRoom);
      // return () => {
      //   socket.off("join", handleJoinRoom);
      // };
    }, [1000]);
  }, [socket]);

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      console.log(data);
    },
    [socket]
  );

  return (
    <div className="">
      <button
        className="text-white   absolute mt-4 ml-[80vw] sm:ml-[90vw] text-[15vw] sm:text-[4.3vw] "
        onClick={notify}
      >
        <IoMdHelpCircle />
      </button>
      <div className="flex items-center justify-center w-full h-screen bg-gray-900">
        <Three />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-gray-800 rounded-lg shadow-lg"
        >
          <motion.h1
            initial={{ y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-3xl font-semibold text-center text-white"
          >
            Welcome to the Lobby
          </motion.h1>
          <form className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-2"
            >
              <label className="text-lg text-white" htmlFor="email">
                Email
              </label>
              <input
                ref={email}
                className="px-4 py-2 text-white bg-gray-700 rounded-lg"
                type="email"
                id="email"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2"
            >
              <label className="text-lg text-white" htmlFor="room">
                Room Number
              </label>
              <input
                ref={room}
                className="px-4 py-2 text-white bg-gray-700 rounded-lg"
                type="text"
                id="room"
                required
              />
            </motion.div>
            <div className="flex justify-center gap-5 mt-6 text-center">
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="px-6 py-2 text-white transition-colors duration-300 bg-green-500 rounded-lg hover:bg-green-600"
              >
                Join
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVideo}
                className="px-6 py-2 text-white transition-colors duration-300 bg-green-500 rounded-lg hover:bg-green-600"
              >
                Join on Video
              </motion.button>
            </div>
          </form>
        </motion.div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
}

export default Lobby;
