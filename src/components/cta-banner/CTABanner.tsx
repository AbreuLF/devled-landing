import Devices from "@/assets/devices.svg";
import { Banner } from "@/components/banner";
import Image from "next/image";
import TalkToSpecialistButton from "../button/TalkToSpecialistButton";

export const CTABanner = () => (
  <Banner color="violet" className="relative z-10 h-[312px] overflow-hidden">
    <Image
      src={Devices}
      layout="fill"
      alt=""
      aria-hidden="true"
      className="!left-[30%] z-[-1]"
    />
    <div className="grid h-full w-full grid-cols-1 items-center justify-between">
      <div className="max-w-96 pl-36 text-left font-red-hat-display text-2xl font-bold leading-9 text-white">
        Cada personalização, um passo para fidelizar o seu cliente!
      </div>
      <div className="mt-[-64px] flex flex-col items-center justify-center">
        <TalkToSpecialistButton />
      </div>
    </div>
  </Banner>
);
