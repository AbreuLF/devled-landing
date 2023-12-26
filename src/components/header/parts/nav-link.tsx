import Link from "next/link";

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, to }) => {
  return (
    <div className="flex h-6 w-12 items-center justify-start pb-0.5 pr-1">
      <div className="h-5 w-11 font-red-hat-display text-base font-medium ">
        <Link href={to} as={`${to}?referrer_source=homepage`}>
          {children}
        </Link>
      </div>
    </div>
  );
};
