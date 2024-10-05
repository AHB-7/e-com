// search-context.ts
import { createContext, useContext } from "react";

// Define the context for search
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
