import { gql, GraphQLClient } from "graphql-request";
import { GHOrgRepoEverything, GHOrgRepos } from "../types_constants/github";

export async function GitHubGQLRequest<T = GHOrgRepos>(
  oauth: string,
  query: string
): Promise<T> {
  return (await new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      authorization: `Bearer ${oauth}`,
    },
  })
    .request(
      gql`
        ${query}
      `
    )
    .then((r) => r)) as T;
}

export async function formatRepos(
  res: GHOrgRepoEverything
): Promise<{ name: string; url: string }[]> {
  let final: { name: string; url: string }[] = [];

  res.organization.repositories.edges.forEach((thing) => {
    final.push({
      name: thing.node.name,
      url: thing.node.url,
    });
  });

  return final;
}

export function removeImageNonsense(url: string): string {
  return url.replace(/\?s\=\d*/, "");
}
