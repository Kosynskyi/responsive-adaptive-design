export const size = {
  mobile: '320px',
  maxMobile: '767px',
  minTablet: '768px',
  maxTablet: '991px',
  minLaptop: '992px',
  maxLaptop: '1199px',
  desktop: '1200px',
};

export const breakpoints = {
  mobile: `(min-width: ${size.mobile})`,
  maxMobile: `(max-width: ${size.maxMobile})`,
  onlyTablet: `(min-width: ${size.minTablet}) and (max-width: ${size.maxTablet})`,
  minTablet: `(min-width: ${size.minTablet})`,
  maxTablet: `(max-width: ${size.maxTablet})`,
  onlyLaptop: `(min-width: ${size.minLaptop}) and (max-width: ${size.maxLaptop})`,
  minLaptop: `(min-width: ${size.minLaptop})`,
  maxLaptop: `(max-width: ${size.maxLaptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
