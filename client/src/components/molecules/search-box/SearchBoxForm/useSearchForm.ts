import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDebounce } from "usehooks-ts";

export type SearchFormFields = {
  search: string;
};

type useSearchFormProps = {
  initialSearchText: string;
  onSearchSubmit: (searchText: string) => void;
  onSearchChange: (searchText: string) => void;
};
const useSearchForm = ({ initialSearchText, onSearchSubmit, onSearchChange }: useSearchFormProps) => {
  const { register, handleSubmit, watch } = useForm<SearchFormFields>({
    defaultValues: {
      search: initialSearchText,
    },
  });

  const currentSearchText = watch("search");

  const debouncedCurrentSearchText = useDebounce<string>(currentSearchText, 300);

  useEffect(() => {
    onSearchChange(debouncedCurrentSearchText);
  }, [debouncedCurrentSearchText, onSearchChange]);

  const onSubmit = handleSubmit(({ search }) => onSearchSubmit(search));

  return { register, onSubmit };
};

export default useSearchForm;
