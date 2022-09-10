import { writable } from "svelte/store";

const currentPath = writable("");

const isLoading = writable(true);
const isLandscape4gameSnap = writable(true);
const isDrawerOpened = writable(false);
const isLightTheme = writable(true);

export {
    currentPath,
    isLoading,
    isLightTheme,
    isLandscape4gameSnap,
    isDrawerOpened,
};
