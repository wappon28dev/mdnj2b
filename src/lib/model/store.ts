import { writable } from "svelte/store";

const PathId = {
    HOME: "home",
    TRAILER: "trailer",
    PLACE: "place",
    RULES: "rules",
    ETC: "etc",
} as const;

let scrollId = writable("");
let isLandscapeSnap = writable(true);
let firestoreStatus = writable("");
let currentPath = writable("");
let isLoading = writable(true);
let sampleData = writable();

export {
    scrollId,
    isLandscapeSnap,
    firestoreStatus,
    PathId,
    currentPath,
    isLoading,
    sampleData,
};
