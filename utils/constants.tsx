export module regexes {
  export const isRepo = /https:\/\/github\.com\/rsource-open-source\/.+/gi;
  export const isOrg = /https:\/\/github\.com\/rsource-open-source\/?/gi;
}

export const unknownJsx = (
  <>
    <title>unknown redirect</title>
    <meta property="og:title" content="unknown redirect" />
  </>
);

export module colors {
  export type hex = `#${string}`;
  export const primary: hex = "#171a21";
}
