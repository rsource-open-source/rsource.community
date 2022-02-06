import useSWR from "swr";

/*
need:
html_url
description
language
*/

interface GithubContents {
  html_url: string;
  description: string;
  language: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export async function getRepositoryInfo(repo: string) {
  // : Promise<{ html_url: string, description: string, langauge: string} | null>
  const { data, error } = useSWR(
    `https://api.github.com/repos/rsource-open-source/${repo}`,
    fetcher
  );
  console.log(data || error);
  // if (!data) return null;
  // if (typeof data !== "object") return null;
  // if (data.has)
  // if (data.description) return data.description;
  // else return null;
}

// export function ripRepoTitle(repo: string): null | string {
//   const match =
// }
