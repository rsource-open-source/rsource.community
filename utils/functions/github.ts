import fetcher from "./fetcher";

export interface GitHubBaseContents {
  name: string;
  html_url: string;
  description: string;
}

export interface GitHubRepoContents extends GitHubBaseContents {
  owner: {
    avatar_url: string;
  };
  language: string;
}

export interface GitHubOrgContents extends GitHubBaseContents {
  avatar_url: string;
}

export async function getRepositoryInfo(
  repo: string
): Promise<GitHubRepoContents | null> {
  return (await fetcher(
    `https://api.github.com/repos/rsource-open-source/${repo}`
  )) as GitHubRepoContents;
}

export async function getOrganizationInfo(
  org: string
): Promise<GitHubOrgContents | null> {
  return (await fetcher(
    `https://api.github.com/orgs/${org}`
  )) as GitHubOrgContents;
}

export function removeImageNonsense(url: string): string {
  return url.replace(/\?s\=\d*/, "");
}
