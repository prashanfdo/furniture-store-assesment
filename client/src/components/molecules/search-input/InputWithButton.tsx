import styled from "@emotion/styled";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import useSearchForm from "./useSearchForm";

const ButtonSearch = styled.button`
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #333;
`;
const InputText = styled.input`
  border: none;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;

type InputWithButtonProps = {
  register: ReturnType<typeof useSearchForm>["register"];
};

export const InputWithButton: React.FC<InputWithButtonProps> = ({ register }) => {
  return (
    <>
      <InputText type="text" {...register("search")} />
      <ButtonSearch>
        <MagnifyingGlassIcon />
      </ButtonSearch>
    </>
  );
};
