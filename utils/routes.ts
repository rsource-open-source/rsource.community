import { Redirect } from "next/dist/lib/load-custom-routes";
import { formatRepos, GitHubGQLRequest } from "./functions/github_gql";
import { GHOrgRepoEverything } from "./types_constants/github";

export const routes: { [index: string]: string } = {
  "api-docs":
    "https://www.postman.com/rsource-open-source/workspace/rsource-api",
  organization: "https://github.com/rsource-open-source",
  roblox: "https://www.roblox.com/groups/10125873/rsource-community",
  discord: "https://discord.gg/2uFfQ3WYNX",
  referral: "https://m.do.co/c/02e293f3a59e",
};

export const aliases: Map<string, string /* not string */> = new Map();

aliases.set("organisation", "organization");
aliases.set("org", "organization");
aliases.set("github", "organization");
aliases.set("group", "roblox");
aliases.set("invite", "discord");
aliases.set("server", "discord");
aliases.set("whats-the-invite-link-again", "discord");

aliases.set("ahk", "repo/ahks");
aliases.set("gist", "repo/gists");
aliases.set("proposals", "repo/strafes.net-aip");
aliases.set("site", "repo/rsource.community");
aliases.set("website", "repo/rsource.community");

export const getAlias = (key: string): string | null => {
  return aliases.get(key) || null;
};

export async function redirectRoutes(
  oauth: string,
  query: string,
  includeRepo: boolean
): Promise<Redirect[]> {
  let nextRoutes: Redirect[] = [];

  // const { ghroutes, aliases, routes } = await import("rsource-routes");

  let waitedghoutes = await formatRepos(
    await GitHubGQLRequest<GHOrgRepoEverything>(oauth, query)
  );

  if (includeRepo === true) {
    waitedghoutes.forEach((n) => {
      if (n.name.startsWith("rsource-")) n.name = n.name.slice(8);
    });

    waitedghoutes.forEach((n) => {
      nextRoutes.push({
        source: `/repo/${n.name}`,
        destination: n.url,
        permanent: true,
      });
    });

    nextRoutes.push({
      source: "/repo",
      destination: "https://github.com/orgs/rsource-open-source/repositories",
      permanent: true,
    });
  }

  aliases.forEach((n, k) => {
    nextRoutes.push({
      source: `/${k}`,
      destination: `/${n}`,
      permanent: true,
    });
  });

  Object.keys(routes).forEach((n) => {
    nextRoutes.push({
      source: `/${n}`,
      destination: routes[n],
      permanent: true,
    });
  });

  (
    [
      {
        source: "/strafesnet",
        destination: "https://roblox.com/groups/6980477/StrafesNET",
        permanent: true,
      },
      {
        source: "/strafesnet/old",
        destination: "https://roblox.com/groups/2607715/Roblox-bhoppers",
        permanent: true,
      },
      {
        source: "/strafesnet/bhop",
        destination: "https://roblox.com/games/5315046213/bhop",
        permanent: true,
      },
      {
        source: "/strafesnet/surf",
        destination: "https://roblox.com/games/5315066937/surf",
        permanent: true,
      },
      {
        source: "/strafesnet/dev",
        destination: "https://roblox.com/games/5721760322/dev",
        permanent: true,
      },
      {
        source: "/strafesnet/maptest-deathrun",
        destination: "https://roblox.com/games/6870563649/Deathrun-Maptest",
        permanent: true,
      },
      {
        source: "/strafesnet/maptest-surf-new",
        destination:
          "https://roblox.com/games/8642163771/Surf-Maptest-New-Physics",
        permanent: true,
      },
      {
        source: "/strafesnet/maptest-bhop-new",
        destination:
          "https://roblox.com/games/8635061347/Bhop-Maptest-New-Physics",
        permanent: true,
      },
      {
        source: "/strafesnet/maptest-surf",
        destination: "https://roblox.com/games/517206177/Surf-Maptest",
        permanent: true,
      },
      {
        source: "/strafesnet/maptest-bhop",
        destination: "https://roblox.com/games/517201717/Bhop-Maptest",
        permanent: true,
      },
    ] as Redirect[]
  ).forEach((r) => nextRoutes.push(r));

  return nextRoutes;
}
