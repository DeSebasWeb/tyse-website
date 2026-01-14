import { cn } from "@/lib/utils";

interface BrandPatternProps {
  className?: string;
  opacity?: number;
}

export default function BrandPattern({
  className,
  opacity = 0.05,
}: BrandPatternProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      style={{ opacity }}
    >
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="brand-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Patrón de urnas simplificado */}
            <rect x="5" y="5" width="20" height="24" rx="3" fill="currentColor" />
            <rect x="35" y="25" width="20" height="24" rx="3" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#brand-pattern)" />
      </svg>
    </div>
  );
}
