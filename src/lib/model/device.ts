export function isLandscape(): boolean {
  return (
    !navigator.userAgent.match(/iPhone|Android.+Mobile/) &&
    window.innerWidth > 730
  );
}
