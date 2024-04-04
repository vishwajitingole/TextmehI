import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Lobby() {
  const email = useRef(null);
  const room = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const r = room.current.value;
    const em = email.current.value;
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <div className="mt-6 text-center">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onSubmit={handleSubmit}
              className="px-6 py-2 text-white transition-colors duration-300 bg-green-500 rounded-lg hover:bg-green-600"
            >
              Join
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Lobby;
