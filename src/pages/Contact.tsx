import { PHONE_NUMBER, SHOP_ADDRESS, SHOP_HOURS, GOOGLE_MAPS_EMBED, GOOGLE_MAPS_LINK, getWhatsAppLink } from "@/data/store";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Enquiry:\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(getWhatsAppLink(msg), "_blank");
    setSent(true);
  };

  return (
    <div className="container py-12">
      <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-secondary mt-0.5" />
            <div>
              <p className="font-bold text-sm">Phone</p>
              <a href={`tel:${PHONE_NUMBER}`} className="text-sm text-secondary font-semibold">{PHONE_NUMBER}</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-secondary mt-0.5" />
            <div>
              <p className="font-bold text-sm">Address</p>
              <p className="text-sm text-muted-foreground">{SHOP_ADDRESS}</p>
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-secondary font-semibold">
                📍 Get Directions
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-secondary mt-0.5" />
            <div>
              <p className="font-bold text-sm">Opening Hours</p>
              <p className="text-sm text-muted-foreground">{SHOP_HOURS}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <a href={`tel:${PHONE_NUMBER}`} className="flex-1 rounded-lg bg-primary text-primary-foreground text-center py-3 font-semibold text-sm">
              📞 Call Now
            </a>
            <a
              href={getWhatsAppLink("Hi, I have an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-whatsapp text-whatsapp-foreground text-center py-3 font-semibold text-sm"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-xl bg-card border p-6">
          <h2 className="font-heading text-lg font-bold mb-4">Send an Enquiry</h2>
          {sent ? (
            <p className="text-whatsapp font-semibold">✅ Redirecting to WhatsApp with your enquiry...</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border bg-background px-4 py-3 text-sm" />
              <input type="tel" required placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-lg border bg-background px-4 py-3 text-sm" />
              <textarea required placeholder="Your Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-lg border bg-background px-4 py-3 text-sm resize-none" />
              <button type="submit" className="w-full rounded-lg bg-secondary text-secondary-foreground py-3 font-bold text-sm">
                Send Enquiry via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border h-72">
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
    </div>
  );
}
