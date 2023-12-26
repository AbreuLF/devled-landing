import Logo from "@/assets/logo-white.svg";
import { Banner } from "@/components/banner";
import Image from "next/image";
import { ReactNode } from "react";
import { EmailForm } from "../form";
import { ExternalLink } from "../link";
import InternaLink from "../link/internal-link";

const TextDiv = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`font-red-hat-display text-xs font-medium leading-loose text-white md:text-sm ${className}`}
  >
    {children}
  </div>
);

export const Footer = () => {
  return (
    <footer>
      <Banner color="slate" className="h-[800px] md:h-[600px]">
        <div className="flex flex-col gap-12 px-10 py-24 md:flex-row md:px-24 md:py-40">
          <div>
            <Image
              src={Logo}
              className="h-10 w-28 md:h-12 md:w-40"
              alt="Devled Logo"
            />
            <TextDiv className="pt-2 text-neutral-400">
              Comece a personalizar os seus canais
            </TextDiv>
            <div className="relative mt-4 min-w-[312px] md:min-w-[24rem]">
              <EmailForm />
            </div>
          </div>

          <div className="flex w-full gap-14 md:mr-20 md:justify-end">
            <div className="grid gap-4">
              <div className="font-inter text-lg font-medium text-white">
                Home
              </div>
              <InternaLink href="#empresa">Empresa</InternaLink>
              <InternaLink href="#servicos">Serviços</InternaLink>
              <InternaLink href="#vantagens">Vantagens</InternaLink>
              <InternaLink href="#contato">Contato</InternaLink>
            </div>
            <div className="grid">
              <div className="font-inter text-lg font-medium text-white">
                Redes Sociais
              </div>
              <ExternalLink href="https://linkedin.com/company//devled">
                LinkedIn
              </ExternalLink>
              <ExternalLink href="https://instagram.com/devled_">
                Instagram
              </ExternalLink>
              <ExternalLink href="https://www.facebook.com/profile.php?id=100092277716514">
                Facebook
              </ExternalLink>
            </div>
          </div>
        </div>

        <div className="px-10 md:px-24">
          <div className="mb-4 h-px w-full border border-white opacity-50"></div>
          <div className="flex flex-col gap-8 md:flex-row">
            <TextDiv className="order-2 flex-1 md:order-1">
              © 2023 Devled Inc. Copyright and rights reserved
            </TextDiv>
            <div className="mmd:order-2 order-1 flex gap-8">
              <TextDiv>Termos e Condições</TextDiv>
              <TextDiv>Política de Privacidade</TextDiv>
            </div>
          </div>
        </div>
      </Banner>
    </footer>
  );
};
