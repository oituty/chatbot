module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "var(--white)",
      black: "var(--black)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      tertiary: "var(--tertiary)",
      title: "var(--title)",
      subtitle: "var(--subtitle)",
      body: "var(--body)",
      label: "var(--label)",
      placeholder: "var(--placeholder)",
      error: "var(--error)",
      success: "var(--success)",
      warning: "var(--warning)",
      "button-primary": "var(--button-primary)",
    },
    fontFamily: {
      primary: "Open Sans, Helvetica, Arial, sans-serif",
    },

    borderRadius: {
      none: "0",
      tiny: "0.125rem",
      sm: "0.5rem",
      md: "0.75rem",
      DEFAULT: "1rem",
      lg: "2rem",
      full: "9999px",
    },
    extend: {
      screens: {
        xs: "300px",
        "3xl": "2500px",
        "6xl": "5000px",
      },
      spacing: {
        "navbar-vertical": "18rem",
      },
      maxWidth: {
        button: "16rem",
        "4xl": "52.5rem",
        "3xl": "45rem",
        "6xl": "74rem",
      },
      minHeight: {
        button: "2.75rem",
      },
      letterSpacing: {
        wide: ".0125em",
      },
      borderWidth: {
        "input-width": "0.063rem",
        2.5: "0.156rem",
        3: "0.188rem",
      },
      padding: {
        "screen-padding": "5.5rem",
        "screen-padding-lg": "3.5rem",
        "screen-padding-md": "2.5rem",
        "screen-padding-sm": "1rem",
      },
      margin: {
        "screen-margin": "5.5rem",
        "screen-margin-lg": "3.5rem",
        "screen-margin-md": "2.5rem",
        "screen-margin-sm": "1rem",
      },
    },
  },
  plugins: [],
};
