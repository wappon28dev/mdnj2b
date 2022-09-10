import { isLightTheme } from "$lib/model/store";
import { get } from "svelte/store";

class ThemeManager {
    static init(): void {
        const isLight =
            typeof window === "undefined" ||
            window.matchMedia("(prefers-color-scheme: light)").matches;
        isLightTheme.set(isLight);
    }

    static toggleTheme(): void {
        isLightTheme.set(!get(isLightTheme));

        const isLightThemeSnap = get(isLightTheme);

        let smuiLink = document.head.querySelector<HTMLLinkElement>("#smui");
        let colorLink = document.head.querySelector<HTMLLinkElement>("#color");
        if (!smuiLink) {
            smuiLink = document.createElement("link");
            smuiLink.rel = "stylesheet";
            smuiLink.id = "theme";
        }
        if (!colorLink) {
            colorLink = document.createElement("link");
            colorLink.rel = "stylesheet";
            colorLink.id = "color";
        }

        smuiLink.href = `/styles/smui${isLightThemeSnap ? "" : "-dark"}.css`;
        colorLink.href = `/styles/variables${
            isLightThemeSnap ? "" : "-dark"
        }.css`;
        document.head
            .querySelector<HTMLLinkElement>(
                'link[href$="/styles/smui-dark.css"]',
            )
            ?.insertAdjacentElement("afterend", smuiLink);
        document.head
            .querySelector<HTMLLinkElement>(
                'link[href$="/styles/variables-dark.css"]',
            )
            ?.insertAdjacentElement("afterend", colorLink);
    }
}

export { ThemeManager };
