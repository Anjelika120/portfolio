import type { ReactNode } from "react";

export function PortfolioFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[86rem] overflow-hidden rounded-[14px] border border-line bg-canvas shadow-[0_4px_8px_rgba(22,32,31,0.05)]">
      {children}
    </div>
  );
}
