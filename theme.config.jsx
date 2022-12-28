const theme = {
  titleSuffix: " | PathRoute - Vorlefan",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  font: false,
  github: "https://github.com/DaxSoft/path",
  projectLink: "https://github.com/DaxSoft/path",
  logo: () => (
    <>
      <img
        src="/logo.svg"
        height="25"
        width="25"
        style={{ marginRight: "1em" }}
      />
      <h1>
        PathRoute <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/javascript.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo.svg"
        />
        <link rel="mask-icon" href="/logo.svg" color="#000000" />
        <link rel="shortcut icon" href="/logo.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="Website created for the documentation of the NPM package @vorlefan/path"
        />
        <meta
          name="description"
          content="Website created for the documentation of the NPM package @vorlefan/path"
        />
        <meta name="author" content="Vorlefan" />
        <meta
          property="og:url"
          content="https://path.vorlefan.com"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content={`${props.title} | PathRoute - Vorlefan`}
        />
        <meta
          property="og:description"
          content="Website created for the documentation of the NPM package @vorlefan/path"
        />
      </>
    );
  },
  darkMode: true,
  footerText: `${new Date().getFullYear()} © VORLEFAN`,
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
