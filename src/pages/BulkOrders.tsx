import { getWhatsAppLink, PHONE_NUMBER } from "@/data/store";
import { Truck, ShieldCheck, HeadphonesIcon, Package } from "lucide-react";

export default function BulkOrders() {
  const features = [
    { icon: <Package className="h-6 w-6" />, title: "Special Bulk Pricing", desc: "Get discounted rates on large quantity orders. The more you buy, the more you save." },
    { icon: <Truck className="h-6 w-6" />, title: "Regular Supply Assurance", desc: "We ensure timely and consistent supply for your ongoing construction projects." },
    { icon: <HeadphonesIcon className="h-6 w-6" />, title: "Dedicated Support", desc: "A dedicated person handles your orders, billing, and delivery coordination." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Quality Guarantee", desc: "Only genuine, ISI-certified products from trusted brands. No compromise on quality." },
  ];

  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">For Contractors & Bulk Buyers</h1>
          <p className="opacity-90 max-w-xl mx-auto mb-8">
            Building a house, apartment, or commercial project? We supply all materials at contractor-friendly prices with guaranteed stock availability.
          </p>
          <a
            href={getWhatsAppLink("Hi, I'm a contractor and need a bulk quote for construction materials.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-8 py-4 font-bold text-whatsapp-foreground text-base"
          >
            💬 Get Bulk Quote on WhatsApp
          </a>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="font-heading text-2xl font-extrabold text-center mb-8">Why Contractors Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl bg-card border p-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-secondary/10 text-secondary mb-3">
                  {f.icon}
                </div>
                <h3 className="font-heading font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-extrabold mb-2">Prefer to Call?</h2>
          <p className="text-muted-foreground mb-6">Our bulk order team is just a call away.</p>
          <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-3 font-bold">
            📞 Call {PHONE_NUMBER}
          </a>
        </div>
      </section>
    </>
  );
}
