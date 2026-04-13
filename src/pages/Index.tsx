import { Link } from "react-router-dom";
import { categories, products, getWhatsAppLink, SHOP_ADDRESS, SHOP_HOURS, PHONE_NUMBER, GOOGLE_MAPS_EMBED, GOOGLE_MAPS_LINK } from "@/data/store";
import { useCart } from "@/contexts/CartContext";
import { Phone, MapPin, Clock, Truck, ShieldCheck, Zap, Building2, Warehouse, ShoppingCart } from "lucide-react";
import { useState } from "react";
import QuantitySelector from "@/components/QuantitySelector";

function HeroSection() {
  return (
    <section className="bg-hero-gradient text-primary-foreground py-16 md:py-24">
      <div className="container text-center">
        <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-balance">
          All Hardware & Construction Materials Under One Roof
        </h1>
        <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-8">
          Trusted by contractors and homeowners across the city. Best prices, genuine brands, and instant availability from our large warehouse.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getWhatsAppLink("Hi, I'd like to get a quote for materials.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 font-bold text-whatsapp-foreground text-base"
          >
            💬 Get Quote on WhatsApp
          </a>
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/40 px-6 py-3.5 font-bold text-primary-foreground text-base hover:bg-primary-foreground/10 transition-colors"
          >
            <MapPin className="h-4 w-4" /> Visit Store
          </a>
        </div>
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="flex flex-col items-center gap-2 rounded-xl bg-card p-5 shadow-sm border hover:shadow-md hover:border-secondary/40 transition-all text-center"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="font-heading font-bold text-sm text-foreground">{cat.name}</span>
              <span className="text-xs text-muted-foreground">{cat.productCount} items</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  const bestSellers = products.filter((p) => p.isBestSeller);
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const getQty = (id: string) => quantities[id] || 1;
  const setQty = (id: string, q: number) => setQuantities((prev) => ({ ...prev, [id]: q }));

  return (
    <section className="py-12 md:py-16 bg-surface">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-2">Best Selling Products</h2>
        <p className="text-muted-foreground text-center mb-8">Fast moving items always in stock</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestSellers.map((p) => (
            <div key={p.id} className="rounded-xl bg-card border p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <Link to={`/products/${p.id}`}>
                <div className="h-36 bg-muted rounded-lg flex items-center justify-center text-4xl mb-3">
                  {categories.find((c) => c.id === p.category)?.icon || "📦"}
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground line-clamp-2 mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{p.brand}</p>
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
                className="mt-2 rounded-lg bg-whatsapp text-whatsapp-foreground text-center py-2 text-xs font-semibold"
              >
                Ask on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { icon: <Truck className="h-6 w-6" />, title: "Bulk Pricing", desc: "Special rates for contractors & large orders" },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Genuine Products", desc: "Only ISI certified & branded materials" },
    { icon: <Zap className="h-6 w-6" />, title: "Fast Availability", desc: "Large stock – no waiting, instant pickup" },
    { icon: <Building2 className="h-6 w-6" />, title: "Local Trusted Shop", desc: "Serving the community for 20+ years" },
  ];
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="text-center p-5 rounded-xl bg-card border">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-secondary/10 text-secondary mb-3">
                {r.icon}
              </div>
              <h3 className="font-heading font-bold text-sm mb-1">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WarehouseSection() {
  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-semibold mb-4">
            <Warehouse className="h-4 w-4" /> Warehouse Advantage
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Large Warehouse = Always In Stock</h2>
          <p className="opacity-80 mb-6">
            Our 60×100 ft shop with 30×60 ft basement and large rear warehouse mean we carry massive inventory. Whether you need 10 bags of cement or 500 — we've got it ready. No delays, no waiting.
          </p>
          <a
            href={getWhatsAppLink("Hi, I need a bulk order. Can we discuss?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-bold text-secondary-foreground"
          >
            Get Bulk Quote →
          </a>
        </div>
        <div className="flex-1 w-full">
          <div className="bg-primary-foreground/10 rounded-xl h-56 md:h-72 flex items-center justify-center text-6xl">
            🏭
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreInfo() {
  return (
    <section className="py-12 md:py-16 bg-surface">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-8">Visit Our Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden border h-64 md:h-80">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-secondary mt-0.5" />
              <div>
                <p className="font-bold text-sm">Address</p>
                <p className="text-sm text-muted-foreground">{SHOP_ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-secondary mt-0.5" />
              <div>
                <p className="font-bold text-sm">Opening Hours</p>
                <p className="text-sm text-muted-foreground">{SHOP_HOURS}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-secondary mt-0.5" />
              <div>
                <p className="font-bold text-sm">Call Us</p>
                <a href={`tel:${PHONE_NUMBER}`} className="text-sm text-secondary font-semibold">{PHONE_NUMBER}</a>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <a href={`tel:${PHONE_NUMBER}`} className="flex-1 rounded-lg bg-primary text-primary-foreground text-center py-3 font-semibold text-sm">
                📞 Call Now
              </a>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg bg-secondary text-secondary-foreground text-center py-3 font-semibold text-sm"
              >
                📍 Get Directions
              </a>
              <a
                href={getWhatsAppLink("Hi, I want to visit your store.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg bg-whatsapp text-whatsapp-foreground text-center py-3 font-semibold text-sm"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <BestSellers />
      <WhyChooseUs />
      <WarehouseSection />
      <StoreInfo />
    </>
  );
}
