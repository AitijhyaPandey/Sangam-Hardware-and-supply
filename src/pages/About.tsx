import { SHOP_NAME, SHOP_ADDRESS, SHOP_HOURS } from "@/data/store";

export default function About() {
  return (
    <div className="container py-12">
      <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">About {SHOP_NAME}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For over <strong>20 years</strong>, {SHOP_NAME} has been the go-to hardware and construction materials shop in the area. What started as a small shop has grown into a trusted destination for contractors, builders, and homeowners alike.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our <strong>60 ft × 100 ft shop</strong> on the main road with a <strong>30 ft × 60 ft basement</strong> stocks everything from cement and steel to paints, plumbing, electrical supplies, and power tools. Behind our shop, our <strong>large warehouse</strong> ensures we never run out of stock — even during peak construction season.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe in <strong>honest pricing, genuine products, and building long-term relationships</strong> with our customers. Whether you're buying a single lock or ordering materials for an entire building, you'll get the same quality service and competitive rates.
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-muted rounded-xl h-48 flex items-center justify-center text-4xl">🏪</div>
          <div className="bg-muted rounded-xl h-48 flex items-center justify-center text-4xl">🏭</div>
        </div>
      </div>

      <div className="rounded-xl bg-surface border p-6 md:p-8">
        <h2 className="font-heading text-xl font-extrabold mb-4">Store Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-bold mb-1">📍 Address</p>
            <p className="text-muted-foreground">{SHOP_ADDRESS}</p>
          </div>
          <div>
            <p className="font-bold mb-1">🕐 Hours</p>
            <p className="text-muted-foreground">{SHOP_HOURS}</p>
          </div>
          <div>
            <p className="font-bold mb-1">🏗️ Shop Size</p>
            <p className="text-muted-foreground">60 ft × 100 ft + 30×60 ft Basement + Large Rear Warehouse</p>
          </div>
        </div>
      </div>
    </div>
  );
}
