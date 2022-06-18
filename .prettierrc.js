module.exports = {
  endOfLine: "auto",
  printWidth: 120,
  overrides: [
    {
      files: ["*.js", "*.mjs"],
      options: {
        parser: "babel",
      },
    },
    {
      files: "*.html",
      options: {
        parser: "angular",
        htmlWhitespaceSensitivity: "ignore",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
        proseWrap: "always",
      },
    },
    {
      files: "*.scss",
      options: {
        parser: "scss",
      },
    },
    {
      files: "*.ts",
      options: {
        parser: "typescript",
        singleQuote: true,
        tabWidth: 4,
      },
    },
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
    {
      files: ["*.yml", "*.yaml"],
      options: {
        parser: "yaml",
      },
    },
  ],
};
