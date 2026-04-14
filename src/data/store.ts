export const PHONE_NUMBER = "+918282887592";
export const WHATSAPP_NUMBER = "918282887592";
export const SHOP_NAME = "Sangam Hardware";
export const SHOP_ADDRESS = "Main Road NH2, Near Health Center more, Andal Gram, West Bengal 713321";
export const SHOP_HOURS = "Mon–Sat: 8:00 AM – 8:00 PM | Sunday: 9:00 AM – 8:00 PM";
export const GOOGLE_MAPS_EMBED = "https://maps.google.com/maps?q=23.586003,87.210967&z=17&output=embed";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/D4aP73x9VTpLMYZP6";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number | null;
  priceLabel: string;
  image: string;
  description: string;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: "tools", name: "Tools", icon: "🔧", description: "Power & hand tools for every job", productCount: 45 },
  { id: "electrical", name: "Electrical", icon: "⚡", description: "Wires, switches, MCBs & more", productCount: 62 },
  { id: "plumbing", name: "Plumbing", icon: "🔩", description: "Pipes, fittings & accessories", productCount: 38 },
  { id: "paints", name: "Paints", icon: "🎨", description: "Interior, exterior & wood finish", productCount: 28 },
  { id: "cement-steel", name: "Cement & Steel", icon: "🏗️", description: "Building materials for construction", productCount: 15 },
  { id: "accessories", name: "Hardware Accessories", icon: "🔨", description: "Nails, screws, hinges & locks", productCount: 80 },
];

export const products: Product[] = [
  { id: "1", name: "Bosch Impact Drill Machine 13mm", category: "tools", brand: "Bosch", price: 3499, priceLabel: "₹3,499", image: "", description: "Professional 600W impact drill suitable for concrete, wood & metal. Ideal for contractors and home use.", isBestSeller: true },
  { id: "2", name: "Havells Lifeline Cable 1.5 sq mm", category: "electrical", brand: "Havells", price: 1850, priceLabel: "₹1,850 / coil", image: "", description: "90m coil FR PVC insulated copper wire. ISI certified for residential and commercial wiring.", isBestSeller: true },
  { id: "3", name: "Astral CPVC Pipe 1 inch", category: "plumbing", brand: "Astral", price: 420, priceLabel: "₹420 / 3m", image: "", description: "Hot & cold water CPVC pipe. Lead-free, corrosion resistant. Perfect for bathroom and kitchen plumbing.", isBestSeller: true },
  { id: "4", name: "Asian Paints Apex Exterior 20L", category: "paints", brand: "Asian Paints", price: 4200, priceLabel: "₹4,200", image: "", description: "Weather-proof exterior emulsion paint. Long-lasting protection against rain, sun & algae.", isBestSeller: true },
  { id: "5", name: "UltraTech Cement 50kg Bag", category: "cement-steel", brand: "UltraTech", price: 380, priceLabel: "₹380 / bag", image: "", description: "OPC 53 Grade cement. Best for foundations, columns & slabs. Bulk rates available.", isBestSeller: true },
  { id: "6", name: "TMT Steel Bar 12mm (Tata Tiscon)", category: "cement-steel", brand: "Tata Tiscon", price: null, priceLabel: "Best Price Available", image: "", description: "Fe-500D grade TMT bars. Earthquake resistant, corrosion proof. Call for today's rate.", isBestSeller: true },
  { id: "7", name: "Stanley Measuring Tape 5m", category: "tools", brand: "Stanley", price: 299, priceLabel: "₹299", image: "", description: "Professional measuring tape with nylon coated blade and auto-lock mechanism." },
  { id: "8", name: "Finolex Switch Board 8 Module", category: "electrical", brand: "Finolex", price: 185, priceLabel: "₹185", image: "", description: "Modular switch board with ISI mark. Flame retardant material." },
  { id: "9", name: "Supreme PVC Pipe 4 inch SWR", category: "plumbing", brand: "Supreme", price: 650, priceLabel: "₹650 / 3m", image: "", description: "Heavy duty SWR pipe for drainage. Ring fit joint for easy installation." },
  { id: "10", name: "Berger WeatherCoat 10L", category: "paints", brand: "Berger", price: 2850, priceLabel: "₹2,850", image: "", description: "Premium exterior paint with anti-algal formula. Silicon enriched for extra durability." },
  { id: "11", name: "Godrej Nav-Tal Lock 7 Lever", category: "accessories", brand: "Godrej", price: 520, priceLabel: "₹520", image: "", description: "Heavy duty padlock with hardened shackle. Ideal for shops, warehouses and gates." },
  { id: "12", name: "GI Wire 18 Gauge 10kg Bundle", category: "accessories", brand: "Local", price: 850, priceLabel: "₹850 / bundle", image: "", description: "Galvanized iron binding wire. Used in construction for tying reinforcement bars." },
  { id: "13", name: "Dewalt Angle Grinder 4 inch", category: "tools", brand: "Dewalt", price: 4200, priceLabel: "₹4,200", image: "", description: "850W angle grinder for cutting and grinding metal, tiles & stone.", isBestSeller: true },
  { id: "14", name: "Anchor Roma Switches (Pack of 10)", category: "electrical", brand: "Anchor", price: 620, priceLabel: "₹620", image: "", description: "Modular switches in white. 6A rating for lights and fans." },
  { id: "15", name: "Hindware Jaguar Tap", category: "plumbing", brand: "Hindware", price: 1100, priceLabel: "₹1,100", image: "", description: "Chrome finish pillar cock tap. Durable ceramic cartridge." },
  { id: "16", name: "SS Hinges 4 inch (Pair)", category: "accessories", brand: "Local", price: 120, priceLabel: "₹120 / pair", image: "", description: "Stainless steel butt hinges for doors and windows. Rust resistant." },
];

export const brands = [...new Set(products.map(p => p.brand))];
