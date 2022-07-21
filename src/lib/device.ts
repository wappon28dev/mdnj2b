function isWideWidth(): boolean {
  return window.innerWidth > 730;
}

function isLandscape(): boolean {
  if (!navigator.userAgent.match(/iPhone|Android.+Mobile/) && isWideWidth()) {
    return true;
  } else {
    return false;
  }
}

export { isWideWidth, isLandscape };
