import useSWR from "swr";
import fetch from "node-fetch";

interface GithubContents {
  owner: {
    avatar_url: string;
  };
  html_url: string;
  description: string;
  language: string;
}

const fetcher = async (url: string): Promise<GithubContents> => {
  return await fetch(url).then((r) => r.json() as Promise<GithubContents>);
};

export async function getRepositoryInfo(
  repo: string
): Promise<GithubContents | null> {
  // const { data, error } = useSWR(
  //   `https://api.github.com/repos/rsource-open-source/${repo}`,
  //   fetcher
  // );
  // return { data, error };

  return (await fetcher(
    `https://api.github.com/repos/rsource-open-source/${repo}`
  )) as GithubContents;

  // if (!data) return null;
  // if (typeof data !== "object") return null;
  // if (data.has)
  // if (data.description) return data.description;
  // else return null;
}

// export function ripRepoTitle(repo: string): null | string {
//   const match =
// }
