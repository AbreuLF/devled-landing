import React from "react";
import { twMerge } from "tailwind-merge";

interface BannerProps {
  children: React.ReactNode;
  className?: string;
  color?: "violet" | "blue" | "green" | "yellow" | "red" | "white" | "slate";
}

export const Banner: React.FC<BannerProps> = ({
  children,
  className,
  color,
}) => {
  const colorMap = {
    violet: "bg-secondary-500",
    blue: "bg-blue-700",
    green: "bg-green-700",
    yellow: "bg-yellow-700",
    red: "bg-red-700",
    white: "bg-white",
    slate: "bg-slate-900",
  };

  return (
    <div className={twMerge("w-full", color ? colorMap[color] : "", className)}>
      {children}
    </div>
  );
};
