import { Banner } from "@/components/banner";

export const PartnerBanner = () => (
  <Banner color="white">
    <div className="mx-6 bg-partner bg-bottom bg-no-repeat md:mx-0">
      <div className="flex flex-col py-12 md:flex-row">
        <div className="flex flex-col gap-5 md:mx-24 md:w-full">
          <div className="font-inter  text-3xl font-semibold text-stone-900 md:text-4xl">
            Somos um parceiro Twilio
          </div>
          <div className="font-inter font-medium leading-8 text-neutral-500">
            A Devled projeta, implementa e presta consultoria de sistemas da
            Twilio e desenvolvimento de eventuais customizações de acordo com a
            necessidade do cliente.
          </div>
        </div>
        <div className="mt-6 flex w-full flex-col gap-4 md:mr-24 md:mt-0">
          <div>
            <div className="font-lato text-base font-bold text-slate-900 md:text-xl">
              Implementação
            </div>
            <div className="font-inter font-medium leading-loose text-neutral-500">
              Iniciamos o projeto do zero para que sua empresa possa impulsionar
              o engajamento com o cliente.
            </div>
          </div>
          <div>
            <div className="font-lato text-base font-bold text-slate-900 md:text-xl">
              Consultoria
            </div>
            <div className="font-inter font-medium leading-loose text-neutral-500">
              Trabalhamos como consultores para te ajudar na implementação de
              seu projeto.
            </div>
          </div>
        </div>
      </div>
    </div>
  </Banner>
);
