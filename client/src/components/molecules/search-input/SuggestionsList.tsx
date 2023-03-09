import React from "react";
import { Link } from "react-router-dom";

type SuggestionsListProps = {
  suggestions: {
    name: string;
    results: number;
    image: string;
  }[];
  showSuggestions: boolean;
};

// TODO: Link to category page
export const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  showSuggestions,
}: SuggestionsListProps) => {
  if (!showSuggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <ul className="suggestion-list md:absolute mt-2 bg-white w-full top-16 md:top-full rounded-md drop-shadow-md md:drop-shadow-lg pb-2 fixed left-0">
      {suggestions.map((suggestion) => (
        <li key={suggestion.name}>
          <Link className="block decoration-transparent py-2 px-4" to="#">
            {suggestion.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
