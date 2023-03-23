import PropTypes from "prop-types";
import React from "react";

import { ThemeProvider } from "styled-components";

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;

export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#0C0D0F",
    red: "#E03131",
    orange: "#E8590C",
    yellow: "#FCC419",
    green: "#23DB42",
    teal: "#89DD13",
    cyan: "#3BC9DB",
    blue: "#25BEFF",
    indigo: "#4263Eb",
    purple: "#7E5CEF",
    pink: "#FE5895",
    gray100: "#FAFAFA",
    gray200: "#E9ECEF",
    gray300: "#DEE2E6",
    gray400: "#CED4DA",
    gray500: "#A4ACB4",
    gray600: "#64666B",
    gray700: "#424449",
    gray800: "#1D1E21",
    gray900: "#141518",
    primary: "#F83600",
    secondary: "#FE8C00",
  },
  fontFamily: {
    heading: ["IBM Plex Sans", "sans-serif"].join(","),
    sans: ["Open Sans", "Arial", "Helvetica", "sans-serif"].join(","),
    mono: ["IBM Plex Mono", "serif"].join(","),
  },
  fontSize: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    "2xl": rem(24),
    "3xl": rem(32),
    "4xl": rem(40),
    "5xl": rem(64),
  },
};

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
