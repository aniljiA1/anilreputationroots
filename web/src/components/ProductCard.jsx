import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product, toggleFavorite }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} style={styles.card}>
      <img src={product.image} alt={product.title} width="100%" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <Link to={`/products/${product._id}`}>View</Link>
      <button onClick={() => toggleFavorite(product._id)}>❤️</button>
    </motion.div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px",
  },
};
