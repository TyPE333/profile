/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#1e293b",
        accent: "#3b82f6",
        biotech: "#10b981",
        neural: "#8b5cf6",
        data: "#ec4899",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-neural": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "gradient-bio": "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
      },
    },
  },
  plugins: [],
};
