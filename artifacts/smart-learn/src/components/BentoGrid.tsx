import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:p-8 pt-24">
      {children}
    </main>
  );
}
