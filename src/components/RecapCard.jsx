import { motion } from "framer-motion";

function RecapCard({ title, stat, emoji }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        border: "2px solid #ddd",
        borderRadius: "16px",
        padding: "1.5rem",
        marginBottom: "1rem",
        maxWidth: "400px",
        margin: "1rem auto",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      <div style={{ fontSize: "2.5rem" }}>{emoji}</div>
      <h2 style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>{title}</h2>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{stat}</p>
    </motion.div>
  );
}

export default RecapCard;
