import { createContext, useContext } from "react";

export const SearchContext = createContext<{
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}>({
    searchQuery: "",
    setSearchQuery: () => {},
});

export function useSearch() {
    return useContext(SearchContext);
}
