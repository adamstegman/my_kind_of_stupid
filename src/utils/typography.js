import Typography from "typography";
import theme from "typography-theme-lincoln";

const linkColor = '#134896';
theme.overrideThemeStyles = (vr, options, styles) => ({
  // Allow configuration of link color when theming
  a: {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`,
    color: linkColor,
  },
});
const typography = new Typography(theme);

export default typography;
