import { motion } from "framer-motion";

function RecapCard({ title, stat, emoji }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white text-gray-900 shadow-xl rounded-2xl px-8 py-6 max-w-sm w-full mx-auto mb-6 text-center"
    >
      <div className="text-5xl mb-2">{emoji}</div>
      <h2 className="text-lg font-medium mb-1">{title}</h2>
      <p className="text-2xl font-bold">{stat}</p>
    </motion.div>
  );
}

export default RecapCard;
