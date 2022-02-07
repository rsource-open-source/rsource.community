import fetcher from "./fetcher";

interface GitHubRepoContents {
  owner: {
    avatar_url: string;
  };
  html_url: string;
  description: string;
  language: string;
  name: string;
}

interface GitHubOrgContents {
  name: string;
  avatar_url: string;
  html_url: string;
  description: string;
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
