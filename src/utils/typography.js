import Typography from "typography";
import CodePlugin from "typography-plugin-code";
import theme from "typography-theme-lincoln";

const linkColor = '#134896';
theme.plugins = [
  new CodePlugin(),
];
theme.overrideThemeStyles = (vr, options, styles) => ({
  // Allow configuration of link color when theming
  a: {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`,
    color: linkColor,
  },
});
const typography = new Typography(theme);
const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
