import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#121213",
  "--my-orange": "#FF530A",
  "--my-red": "#db4437",
  "--my-green": "#0f9d58",
  "--my-yellow": "yellow",
};

export const myTheme = buildLegacyTheme({
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#FF530A",
  "--gray-base": "#FF530A",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  "--brand-primary": props["--my-orange"],

  "--default-button-color": "#666",
  "--default-button-primary-color": props["--my-orange"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  "--state-info-color": props["--my-orange"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-orange"],
});
