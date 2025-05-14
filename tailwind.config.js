/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Nier Light Theme (HEX)
        'nier-light-bg': '#EFEDE7', // HSL(45, 20%, 92%)
        'nier-light-text': '#464339', // HSL(45, 10%, 25%)
        'nier-light-text-secondary': '#7E7867', // HSL(45, 10%, 45%)
        'nier-accent': '#D19847', // HSL(35, 60%, 55%) - Used for both light and dark accents
        'nier-light-border': '#C9C4B6', // HSL(45, 15%, 75%)
        // Nier Dark Theme (HEX)
        'nier-dark-bg': '#1C1E22', // HSL(220, 10%, 12%)
        'nier-dark-text': '#E2DECF', // HSL(45, 25%, 85%)
        'nier-dark-text-secondary': '#B8AF94', // HSL(45, 20%, 65%)
        'nier-dark-border': '#393E46', // HSL(220, 10%, 25%)

        // Shadcn UI default colors (keep for compatibility if needed, using HSL with CSS vars)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // This will use the --accent CSS variable
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

