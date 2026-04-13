import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { getWhatsAppLink, categories } from "@/data/store";
import { Trash2, ShoppingCart } from "lucide-react";
import QuantitySelector from "@/components/QuantitySelector";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  const buildWhatsAppOrder = () => {
    const lines = items.map(
      (i) => `• ${i.product.name} × ${i.quantity} — ${i.product.price ? `₹${(i.product.price * i.quantity).toLocaleString("en-IN")}` : "Price on request"}`
    );
    const total = totalPrice > 0 ? `\nEstimated Total: ₹${totalPrice.toLocaleString("en-IN")}` : "";
    return getWhatsAppLink(`Hi, I'd like to order:\n\n${lines.join("\n")}${total}\n\nPlease confirm availability and final price.`);
  };

  if (items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h1 className="font-heading text-2xl font-extrabold mb-2">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">Add some products to get started!</p>
        <Link to="/products" className="inline-flex rounded-lg bg-primary text-primary-foreground px-6 py-3 font-bold text-sm">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl md:text-3xl font-extrabold">Your Cart</h1>
        <button onClick={clearCart} className="text-xs text-muted-foreground hover:text-destructive transition-colors">
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const catIcon = categories.find((c) => c.id === item.product.category)?.icon || "📦";
            return (
              <div key={item.product.id} className="flex gap-4 rounded-xl bg-card border p-4">
                <div className="h-20 w-20 bg-muted rounded-lg flex items-center justify-center text-3xl shrink-0">
                  {catIcon}
                </div>
                <div className="flex-1 min-w-0">
                  <Link to={`/products/${item.product.id}`} className="font-heading font-bold text-sm line-clamp-2 hover:text-secondary">
                    {item.product.name}
                  </Link>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.product.brand}</p>
                  <p className="font-bold text-secondary text-sm mt-1">{item.product.priceLabel}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <QuantitySelector quantity={item.quantity} onChange={(q) => updateQuantity(item.product.id, q)} compact />
                    <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors" aria-label="Remove">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  {item.product.price && (
                    <p className="font-bold text-sm">₹{(item.product.price * item.quantity).toLocaleString("en-IN")}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="rounded-xl bg-card border p-6 h-fit sticky top-32">
          <h2 className="font-heading font-bold text-lg mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Items</span>
              <span>{items.reduce((s, i) => s + i.quantity, 0)}</span>
            </div>
            {totalPrice > 0 && (
              <div className="flex justify-between font-bold text-base border-t pt-2">
                <span>Estimated Total</span>
                <span className="text-secondary">₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-muted-foreground mb-4">Final price confirmed after WhatsApp discussion. Bulk discounts may apply!</p>
          <a
            href={buildWhatsAppOrder()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-lg bg-whatsapp text-whatsapp-foreground text-center py-3.5 font-bold text-sm mb-3"
          >
            💬 Send Order on WhatsApp
          </a>
          <Link to="/products" className="block text-center text-sm text-secondary font-semibold">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
