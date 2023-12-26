import { AnchorHTMLAttributes, ReactNode } from "react";

export const ExternalLink = ({
  children,
  href,
  ...props
}: { children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className="font-red-hat-display text-sm font-medium text-neutral-400 hover:text-gray-50 md:text-base"
    target="_blank"
    href={href}
    {...props}
  >
    {children}
  </a>
);
