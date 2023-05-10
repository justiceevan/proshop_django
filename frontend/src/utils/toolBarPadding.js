export const calculateToolbarPadding = (width) => {
  const phone = 768;
  const tablet = 992;
  const desktop = 1200;
  const largeDesktop = 1400;

  const padding =
    width < phone
      ? (width - 540) / 16 - 1
      : width < tablet
      ? (width - 720) / 16 - 1
      : width < desktop
      ? (width - 960) / 16 - 2
      : width < largeDesktop
      ? (width - 1140) / 16 - 2
      : (width - 1320) / 16 - 2;

  return padding;
};
