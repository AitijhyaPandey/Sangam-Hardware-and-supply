import { useSearchParams, Link } from "react-router-dom";
import { products, categories, brands, getWhatsAppLink } from "@/data/store";
import { useCart } from "@/contexts/CartContext";
import { useState, useMemo } from "react";
import { ShoppingCart } from "lucide-react";
import QuantitySelector from "@/components/QuantitySelector";

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "";
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { addToCart } = useCart();

  const filtered = useMemo(() => {
    let list = products;
    if (selectedCategory) list = list.filter((p) => p.category === selectedCategory);
    if (selectedBrand) list = list.filter((p) => p.brand === selectedBrand);
    if (priceSort === "low") list = [...list].sort((a, b) => (a.price ?? 99999) - (b.price ?? 99999));
    if (priceSort === "high") list = [...list].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    return list;
  }, [selectedCategory, selectedBrand, priceSort]);

  const getQty = (id: string) => quantities[id] || 1;
  const setQty = (id: string, q: number) => setQuantities((prev) => ({ ...prev, [id]: q }));

  return (
    <div className="container py-8">
      <h1 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">Our Products</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="rounded-lg border bg-card px-3 py-2 text-sm">
          <option value="">All Categories</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="rounded-lg border bg-card px-3 py-2 text-sm">
          <option value="">All Brands</option>
          {brands.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
        <select value={priceSort} onChange={(e) => setPriceSort(e.target.value)} className="rounded-lg border bg-card px-3 py-2 text-sm">
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{filtered.length} products found</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((p) => (
          <div key={p.id} className="rounded-xl bg-card border p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <Link to={`/products/${p.id}`}>
              <div className="h-32 bg-muted rounded-lg flex items-center justify-center text-3xl mb-3">
                {categories.find((c) => c.id === p.category)?.icon || "📦"}
              </div>
              <h3 className="font-heading font-bold text-sm line-clamp-2 mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground mb-1">{p.brand}</p>
              <p className="font-bold text-secondary text-sm">{p.priceLabel}</p>
            </Link>

            <div className="mt-3 flex items-center gap-2">
              <QuantitySelector quantity={getQty(p.id)} onChange={(q) => setQty(p.id, q)} compact />
            </div>

            <button
              onClick={() => { addToCart(p, getQty(p.id)); setQty(p.id, 1); }}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-secondary text-secondary-foreground py-2 text-xs font-semibold w-full"
            >
              <ShoppingCart className="h-3.5 w-3.5" /> Add to Cart
            </button>

            <a
              href={getWhatsAppLink(`Hi, I'm interested in: ${p.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-2 rounded-lg bg-whatsapp text-whatsapp-foreground text-center py-2 text-xs font-semibold"
            >
              Ask on WhatsApp
            </a>
          </div>
        ))}
      </div>

      {/* Send list CTA */}
      <div className="mt-12 rounded-xl bg-primary text-primary-foreground p-6 md:p-8 text-center">
        <h3 className="font-heading text-xl font-extrabold mb-2">Need Multiple Items?</h3>
        <p className="opacity-80 mb-4 text-sm">Send us your full material list on WhatsApp and get the best combined price!</p>
        <a
          href={getWhatsAppLink("Hi, I have a material list. Can you give me the best price?")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground"
        >
          💬 Send List on WhatsApp
        </a>
      </div>
    </div>
  );
}
