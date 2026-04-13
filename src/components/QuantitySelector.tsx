import { Minus, Plus } from "lucide-react";

interface Props {
  quantity: number;
  onChange: (qty: number) => void;
  min?: number;
  compact?: boolean;
}

export default function QuantitySelector({ quantity, onChange, min = 1, compact }: Props) {
  return (
    <div className={`inline-flex items-center border rounded-lg ${compact ? "h-8" : "h-10"}`}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        className={`flex items-center justify-center text-foreground hover:bg-muted transition-colors rounded-l-lg ${compact ? "w-8 h-8" : "w-10 h-10"}`}
        aria-label="Decrease quantity"
      >
        <Minus className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </button>
      <span className={`flex items-center justify-center font-semibold text-foreground border-x ${compact ? "w-8 text-xs" : "w-12 text-sm"}`}>
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        className={`flex items-center justify-center text-foreground hover:bg-muted transition-colors rounded-r-lg ${compact ? "w-8 h-8" : "w-10 h-10"}`}
        aria-label="Increase quantity"
      >
        <Plus className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </button>
    </div>
  );
}
