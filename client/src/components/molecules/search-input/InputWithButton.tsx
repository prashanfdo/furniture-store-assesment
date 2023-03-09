import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";
import useSearchForm from "./useSearchForm";

type InputWithButtonProps = {
  register: ReturnType<typeof useSearchForm>["register"];
};

export const InputWithButton: React.FC<InputWithButtonProps> = ({ register }) => {
  return (
    <>
      <input
        className="w-full border-none rounded-tl-lg rounded-bl-lg bg-gray-200 px-3 py-2 outline-transparent"
        type="text"
        {...register("search")}
        autoComplete="off"
      />
      <button className="w-10 grid place-items-center">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
      </button>
    </>
  );
};
