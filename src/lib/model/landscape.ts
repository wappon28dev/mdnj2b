export class LandScapeDetecter {
    static isLandscape(): boolean {
        return (
            !navigator.userAgent.match(/iPhone|Android.+Mobile/) &&
            window.innerWidth > 730
        );
    }

    static isLandscape4game(): boolean {
        return window.innerWidth > 665;
    }
}
