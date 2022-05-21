module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      }
    },
  },
};
