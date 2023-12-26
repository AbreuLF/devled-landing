import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export default function InternaLink({
  children,
  href,
  ...props
}: LinkProps & { children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-red-hat-display text-sm font-medium text-neutral-400 hover:text-gray-50 md:text-base"
      {...props}
    >
      {children}
    </Link>
  );
}
