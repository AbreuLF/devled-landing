import React from "react";
import { twMerge } from "tailwind-merge";
import TalkToSpecialistButton from "../button/TalkToSpecialistButton";

const HeroTextLine: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <span
    className={twMerge(
      "font-lato text-[40px] font-bold leading-tight text-slate-900 md:text-5xl",
      className,
    )}
  >
    {children}
  </span>
);

export const Hero = () => {
  return (
    <div className="flex flex-col justify-between py-20 md:flex-row md:py-40">
      <div className="inline-flex h-80 flex-col items-start justify-start gap-8 md:w-[540px]">
        <div>
          <HeroTextLine>Capture dados e engaje </HeroTextLine>
          <HeroTextLine className="italic">seu cliente</HeroTextLine>
          <HeroTextLine> de forma </HeroTextLine>
          <HeroTextLine className="text-secondary-500">
            personalizada
          </HeroTextLine>
        </div>
        <span className="font-red-hat-display text-lg font-normal leading-relaxed text-slate-900">
          Personalizamos cada passo do seu projeto
        </span>
        <TalkToSpecialistButton />
      </div>
      <div className="mt-20 block min-h-[235px] w-[325px] bg-hero-icons bg-cover bg-center bg-no-repeat md:-mr-10 md:-mt-9 md:min-h-[486px] md:w-[619px] md:bg-right"></div>
    </div>
  );
};
