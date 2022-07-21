import type { TopAppBarComponentDev } from "@smui/top-app-bar";
import { writable } from "svelte/store";

const PathId = {
  HOME: "home",
  TRAILER: "trailer",
  PLACE: "place",
  RULES: "rules",
  ETC: "etc",
} as const;

let scrollId = writable("");
let firestoreStatus = writable("");
let currentPath = writable("");
let isLoading = writable(true);
let sampleData = writable();

export {
  scrollId,
  firestoreStatus,
  PathId,
  currentPath,
  isLoading,
  sampleData,
};
