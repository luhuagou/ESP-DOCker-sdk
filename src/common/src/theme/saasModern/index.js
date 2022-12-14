import colors from './colors';

export const saasModernTheme = {
  breakpoints: [576, 768, 991, 1220],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '3px solid',
    '4px solid',
    '5px solid',
    '6px solid',
  ],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors,
  colorStyles: {
    primary: {
      color: colors.primary,
      borderColor: colors.transparent,
      backgroundColor: colors.transparent,
      '&:hover': {
        color: colors.primary,
        backgroundColor: colors.transparent,
      },
    },
    secondary: {
      color: colors.secondary,
      borderColor: colors.transparent,
      backgroundColor: colors.transparent,
      '&:hover': {
        color: colors.secondaryHover,
        borderColor: colors.transparent,
        backgroundColor: colors.transparent,
      },
    },
    warning: {
      color: colors.yellow,
      borderColor: colors.yellow,
      '&:hover': {
        color: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    error: {
      color: colors.secondaryHover,
      borderColor: colors.secondaryHover,
      '&:hover': {
        color: colors.secondary,
        borderColor: colors.secondary,
      },
    },
    primaryWithBg: {
      color: colors.white,
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      border: '1px solid',
      '&:hover': {
        color: colors.white,
        backgroundColor: colors.primaryHover,
        borderColor: colors.primaryHover,
        boxShadow: colors.primaryBoxShadow,
      },
    },
    secondaryWithBg: {
      color: colors.black,
      backgroundColor: colors.secondary,
      borderColor