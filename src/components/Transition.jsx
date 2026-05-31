import React from "react";
import { motion } from "motion/react";

export default function Transition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="pt-24 min-h-[80vh] flex flex-col justify-start"
    >
      {children}
    </motion.div>
  );
}
