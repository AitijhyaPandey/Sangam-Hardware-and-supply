import { getWhatsAppLink } from "@/data/store";

export default function WhatsAppFab() {
  return (
    <a
      href={getWhatsAppLink("Hi, I want to enquire about your products.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg animate-float"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.054 9.378L1.054 31.29l6.156-1.97A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.35 22.606c-.394 1.11-2.286 2.124-3.15 2.186-.864.062-1.67.39-5.63-1.174-4.764-1.88-7.774-6.756-8.008-7.07-.234-.314-1.908-2.54-1.908-4.844s1.208-3.438 1.636-3.91c.428-.47.936-.59 1.248-.59.312 0 .624.002.898.016.288.016.674-.11 1.054.804.394.95 1.34 3.28 1.458 3.514.118.234.196.508.04.82-.158.314-.236.508-.47.784-.234.274-.494.614-.704.824-.234.234-.478.488-.206.958.274.47 1.214 2.002 2.606 3.244 1.788 1.596 3.296 2.09 3.766 2.324.47.234.744.196 1.018-.118.274-.314 1.174-1.37 1.488-1.84.314-.47.624-.39 1.054-.234.428.156 2.754 1.3 3.226 1.536.47.234.784.352.902.548.118.196.118 1.13-.276 2.24z" />
      </svg>
    </a>
  );
}
