import { create } from "zustand";
import { persist } from "zustand/middleware";

export function createPersistentStore<T>(key: string, initialValue: T) {
    return create(
        persist<{
            value: T;
            setValue: (newValue: T) => void;
        }>(
            (set) => ({
                value: initialValue,
                setValue: (newValue: T) => set({ value: newValue }),
            }),
            {
                name: key,
            }
        )
    );
}
