import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { ForwardedRef, forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type SearchInputProps = UseFormRegisterReturn;

const SearchInput = forwardRef((props: SearchInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { ...registerProps } = props;
  return (
    <>
      <input
        className="w-full px-3 py-2 bg-gray-200 border-transparent border-none rounded-tl-lg rounded-bl-lg outline-transparent"
        type="text"
        {...registerProps}
        ref={ref}
        autoComplete="off"
      />
      <button className="grid w-10 text-white transition-colors border-transparent rounded-tr-lg rounded-br-lg place-items-center bg-coral-500 hover:bg-coral-300">
        <MagnifyingGlassIcon className="w-5 h-5 font-bold" />
      </button>
    </>
  );
});

export default SearchInput;
