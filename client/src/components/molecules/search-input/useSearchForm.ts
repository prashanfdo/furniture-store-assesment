import { useEffect } from "react";
import { useForm } from "react-hook-form";

type SearchFormFields = {
  search: string;
};

type useSearchFormProps = {
  initialSearchText: string;
  onSearchSubmit: (searchText: string) => void;
  onSearchChange: (searchText: string) => void;
  setShowSuggestions: (show: boolean) => void;
};
const useSearchForm = ({
  initialSearchText,
  onSearchSubmit,
  onSearchChange,
  setShowSuggestions,
}: useSearchFormProps) => {
  const { register, handleSubmit, watch } = useForm<SearchFormFields>({
    defaultValues: {
      search: initialSearchText,
    },
  });

  const currentSearchText = watch("search");

  useEffect(() => {
    onSearchChange(currentSearchText);
  }, [currentSearchText, onSearchChange]);

  const onSubmit = handleSubmit(({ search }) => onSearchSubmit(search));

  return { register, onSubmit };
};

export default useSearchForm;
