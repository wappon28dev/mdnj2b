import type { TopAppBarComponentDev } from "@smui/top-app-bar";
import { writable } from "svelte/store";

let scrollId = writable("");
let topAppBar = writable();

export { scrollId };

// export function switchTheme() {
//   isDarkMode = !isDarkMode;
//   let themeLink = document.head.querySelector<HTMLLinkElement>("#theme");
//   if (!themeLink) {
//     themeLink = document.createElement("link");
//     themeLink.rel = "stylesheet";
//     themeLink.id = "theme";
//   }
//   themeLink.href = `/smui${lightTheme ? "" : "-dark"}.css`;
//   document.head
//     .querySelector<HTMLLinkElement>('link[href$="/smui-dark.css"]')
//     ?.insertAdjacentElement("afterend", themeLink);
// }
