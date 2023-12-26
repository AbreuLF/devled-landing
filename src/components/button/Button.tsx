import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ className, children, href, ...props }: ButtonProps) {
  return (
    <div className="rounded-lg bg-[#100830] px-5 py-4">
      <div className="text-center font-red-hat-display text-sm font-medium text-white">
        <Link href={href} className={twMerge(className)} {...props}>
          {children}
        </Link>
      </div>
    </div>
  );
}
