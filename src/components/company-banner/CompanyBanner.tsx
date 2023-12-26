import Logo from "@/assets/logo.svg";
import { Banner } from "@/components/banner";
import Image from "next/image";

export const CompanyBanner = () => (
  <Banner color="violet" className="h-96">
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <Image
        src={Logo}
        className="h-10 w-28 md:h-12 md:w-40"
        alt="Devled Logo"
        style={{ background: "white" }}
      />
      <span className="mx-6 text-center font-red-hat-display text-base font-normal leading-normal text-white md:px-32 md:text-2xl md:leading-10">
        Somos uma empresa de serviços e consultoria de tecnologia. Nossa missão
        é potencializar o crescimento dos negócios através de soluções
        personalizadas e inovadoras para as necessidades específicas de cada
        cliente.
      </span>
    </div>
  </Banner>
);
