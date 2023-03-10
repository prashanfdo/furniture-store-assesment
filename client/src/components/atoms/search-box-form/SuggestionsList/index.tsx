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
const SuggestionsList: React.FC<SuggestionsListProps> = ({ suggestions, showSuggestions }: SuggestionsListProps) => {
  if (!showSuggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <ul className="fixed left-0 w-full pb-2 mt-2 bg-white rounded-md suggestion-list md:absolute top-16 md:top-full drop-shadow-md md:drop-shadow-lg">
      {suggestions.map((suggestion) => (
        <li key={suggestion.name}>
          <Link className="block px-4 py-2 decoration-transparent" to="#">
            {suggestion.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;