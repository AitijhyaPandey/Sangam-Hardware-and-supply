import { Link } from "react-router-dom";
import { SHOP_NAME, SHOP_ADDRESS, PHONE_NUMBER, SHOP_HOURS, getWhatsAppLink } from "@/data/store";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-lg font-bold mb-3">{SHOP_NAME}</h3>
          <p className="text-sm opacity-80">{SHOP_ADDRESS}</p>
          <p className="text-sm opacity-80 mt-1">{SHOP_HOURS}</p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/products" className="hover:opacity-100">All Products</Link></li>
            <li><Link to="/bulk-orders" className="hover:opacity-100">Bulk Orders</Link></li>
            <li><Link to="/about" className="hover:opacity-100">About Us</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-3">Get In Touch</h4>
          <a href={`tel:${PHONE_NUMBER}`} className="block text-sm opacity-80 hover:opacity-100 mb-2">📞 {PHONE_NUMBER}</a>
          <a href={getWhatsAppLink("Hi!")} target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground">
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 text-center py-4 text-xs opacity-60">
        © {new Date().getFullYear()} {SHOP_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
