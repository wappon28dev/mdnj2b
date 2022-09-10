export type valueOf<T> = T[keyof T];
export type PickType<T, K extends keyof T> = T[K];
export type devicesJSON = [{ deviceHash: string; nickname: string }];

export function assert(assert: boolean): void | never {
    if (!assert) {
        throw new Error("Assertion Error!");
    }
}

export const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const PathId = {
    HOME: "/",
    TRAILER: "/trailer",
    PLACE: "/place",
    RANKING: "/ranking",
    ETC: "/etc",
} as const;
export type PathId = valueOf<typeof PathId>;
