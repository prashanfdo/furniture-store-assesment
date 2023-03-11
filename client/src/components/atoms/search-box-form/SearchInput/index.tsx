import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { ForwardedRef, forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type SearchInputProps = UseFormRegisterReturn;

const SearchInput = forwardRef((props: SearchInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { ...registerProps } = props;
  return (
    <>
      <input
        className="w-full px-3 py-2 bg-gray-200 border-none rounded-tl-lg rounded-bl-lg outline-transparent"
        type="text"
        {...registerProps}
        ref={ref}
        autoComplete="off"
      />
      <button className="grid w-10 place-items-center">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
      </button>
    </>
  );
});

export default SearchInput;
