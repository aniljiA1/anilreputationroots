import { useEffect, useState } from "react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [page, search]);

  const fetchProducts = async () => {
    const res = await api.get(
      `/products?search=${search}&page=${page}&limit=5`,
    );
    setProducts(res.data.products);
    setTotalPages(res.data.totalPages);
  };

  const toggleFavorite = async (id) => {
    await api.post(`/favorites/${id}`);
  };

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {products.map((p) => (
          <ProductCard
            key={p._id}
            product={p}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}
