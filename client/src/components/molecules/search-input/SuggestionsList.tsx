import styled from "@emotion/styled";
import React from "react";

const UlSuggestions = styled.ul`
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  position: absolute;
  margin-top: 0.25rem;
  background-color: #fff;
  display: grid;
  width: 100%;
  min-height: 2rem;
  top: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 5px 3px 2px rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
`;
const LinkSuggestion = styled.a`
  display: block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

type SuggestionsListProps = {
  suggestions: {
    name: string;
    results: number;
    image: string;
  }[];
  showSuggestions: boolean;
};

export const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  showSuggestions,
}: SuggestionsListProps) => {
  if (!showSuggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <UlSuggestions className="suggestion-list">
      {suggestions.map((suggestion) => (
        <li key={suggestion.name}>
          <LinkSuggestion href="#">{suggestion.name}</LinkSuggestion>
        </li>
      ))}
    </UlSuggestions>
  );
};