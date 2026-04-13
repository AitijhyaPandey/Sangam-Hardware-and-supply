import { useParams, Link } from "react-router-dom";
import { products, categories, getWhatsAppLink } from "@/data/store";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import QuantitySelector from "@/components/QuantitySelector";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <p className="text-muted-foreground mb-4">Product not found.</p>
        <Link to="/products" className="text-secondary font-semibold">← Back to Products</Link>
      </div>
    );
  }

  const categoryInfo = categories.find((c) => c.id === product.category);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container py-8">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-6 hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted rounded-xl h-64 md:h-96 flex items-center justify-center text-6xl">
          {categoryInfo?.icon || "📦"}
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold text-secondary mb-1">{categoryInfo?.name}</span>
          <h1 className="font-heading text-2xl font-extrabold mb-2">{product.name}</h1>
          <p className="text-sm text-muted-foreground mb-1">Brand: {product.brand}</p>
          <p className="text-2xl font-bold text-secondary my-4">{product.priceLabel}</p>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

          {/* Quantity */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm font-medium">Qty:</span>
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-secondary text-secondary-foreground py-3.5 font-bold text-sm disabled:opacity-50"
              disabled={added}
            >
              {added ? <><Check className="h-4 w-4" /> Added to Cart</> : <><ShoppingCart className="h-4 w-4" /> Add to Cart</>}
            </button>
            <a
              href={getWhatsAppLink(`Hi, I want to order: ${product.name} × ${quantity} (${product.priceLabel})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-whatsapp text-whatsapp-foreground text-center py-3.5 font-bold text-sm"
            >
              💬 Order on WhatsApp
            </a>
          </div>

          {product.price === null && (
            <p className="mt-4 text-xs text-muted-foreground bg-surface rounded-lg p-3">
              💡 Price varies daily for this item. WhatsApp us for today's best rate!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
