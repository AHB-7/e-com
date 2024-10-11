import { create } from "zustand";



export const useSearchStore = create<SearchState>((set) => ({
    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),
}));
