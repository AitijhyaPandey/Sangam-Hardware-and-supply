import { Phone, Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_NUMBER, SHOP_NAME, getWhatsAppLink } from "@/data/store";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Bulk Orders", to: "/bulk-orders" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-1.5 font-medium">
            <Phone className="h-3.5 w-3.5" /> {PHONE_NUMBER}
          </a>
          <a
            href={getWhatsAppLink("Hi, I'd like to get a quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-whatsapp px-3 py-1 font-semibold text-whatsapp-foreground text-xs"
          >
            💬 Get Quote
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="font-heading text-lg font-extrabold text-primary leading-tight">
            {SHOP_NAME}
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Cart icon */}
            <Link to="/cart" className="relative text-foreground hover:text-secondary transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile toggle */}
            <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t bg-card pb-4">
            <ul className="container flex flex-col gap-3 pt-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm font-medium text-foreground hover:text-secondary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-foreground hover:text-secondary"
                >
                  Cart {totalItems > 0 && `(${totalItems})`}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
