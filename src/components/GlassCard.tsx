
import React from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => (
  <div
    className={cn(
      "glass rounded-xl p-6 transition-transform hover:scale-105 hover:shadow-xl duration-200",
      className
    )}
  >
    {children}
  </div>
);

export default GlassCard;
