import fetch from "node-fetch";

export async function getGitHubRepositoryDescription(
  repo: string
): Promise<string | null> {
  // description
  const response = await fetch(`https://api.github.com/repos/${repo}`);
  const data = (await response.json()) as { description: string | undefined };
  if (data.description) return data.description;
  else return null;
}

// export function ripRepoTitle(repo: string): null | string {
//   const match =
// }
