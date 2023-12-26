"use client";
import { subscribe } from "@/actions/subscribe";
import { useEffect, useRef, useState } from "react";

type EmailResponse =
  | {
      message: string;
      error?: undefined;
    }
  | {
      error: string;
      message?: undefined;
    }
  | null;

export const EmailForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [emailResponse, setEmailResponse] = useState<EmailResponse>(null);
  const { error, message } = emailResponse || {};

  useEffect(() => {
    if (emailResponse) {
      formRef?.current?.reset();
      inputRef?.current?.focus();
    }
  }, [emailResponse, inputRef]);

  return (
    <>
      <div className="relative mt-4 min-w-[312px] md:min-w-[24rem]">
        <form
          ref={formRef}
          action={async (formData: FormData) => {
            const response = await subscribe(formData);
            setEmailResponse(response);
          }}
        >
          <input
            ref={inputRef}
            type="email"
            name="email"
            className="w-full rounded-full border-2 border-neutral-400 bg-slate-900 p-2 pl-4 font-red-hat-display text-base text-white placeholder:text-neutral-500 focus:outline-2 focus:outline-white md:p-3"
            placeholder="Insira seu e-mail"
            required
          />
          <button
            className="absolute right-1.5 top-[10%] aspect-auto h-[80%] cursor-pointer rounded-full border-none bg-secondary-500 p-1 hover:opacity-80  md:p-1.5"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </button>
        </form>
      </div>
      {error ? (
        <div className="pt-2 text-center text-xs text-red-500">
          Pedimos desculpas, mas tivemos um erro ao cadastrar esse e-mail. Por
          favor tente outro e-mail ou volte mais tarde.
        </div>
      ) : null}
      {!error && message ? (
        <div className="pt-2 text-center text-xs text-white">
          Entramos em contato em breve!
        </div>
      ) : null}
    </>
  );
};
