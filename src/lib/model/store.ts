import type { ScoreData } from "$lib/firebase/db_repository";
import { writable } from "svelte/store";

const currentPath = writable("");

const isLoading = writable(true);
const isLandscape = writable(true);
const isDrawerOpened = writable(false);
const isLightTheme = writable(true);

const currentScoreData = writable([
    {
        rank: 0,
        charId: 0,
        classId: "",
        isKata: true,
        nickname: "",
        score: 0,
    },
] as ScoreData[]);

export {
    currentPath,
    isLoading,
    isLightTheme,
    isLandscape,
    isDrawerOpened,
    currentScoreData,
};
