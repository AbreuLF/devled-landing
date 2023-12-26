import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import TalkToSpecialistButton from "../button/TalkToSpecialistButton";
import { NavLinkGroupDesktop } from "./parts";

export const Header = () => {
  return (
    <nav className="dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between pt-4">
        <Link href="https://devled.com.br/" className="flex items-center">
          <Image
            src={Logo}
            className="h-10 w-28 md:h-12 md:w-40"
            alt="Devled Logo"
          />
        </Link>
        <div className="hidden md:flex md:items-center md:gap-48">
          <NavLinkGroupDesktop />
          <TalkToSpecialistButton />
        </div>
        <div className="flex md:hidden">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
