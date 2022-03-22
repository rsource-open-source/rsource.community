import { Redirect } from "next/dist/lib/load-custom-routes";

export default async function redirectRoutes(
  oauth: string,
  query: string,
  includeRepo: boolean
): Promise<Redirect[]> {
  let redirectRoutes: Redirect[] = [];

  const { ghroutes, aliases, routes } = await import("rsource-routes");

  let waitedghoutes = await ghroutes.formatRepos(
    await ghroutes.getGitHubRepos(oauth, query)
  );

  if (includeRepo === true) {
    waitedghoutes.forEach((n) => {
      if (n.name.startsWith("rsource-")) n.name = n.name.slice(8);
    });

    waitedghoutes.forEach((n) => {
      redirectRoutes.push({
        source: `/repo/${n.name}`,
        destination: n.url,
        permanent: true,
      });
    });

    redirectRoutes.push({
      source: "/repo",
      destination: "https://github.com/orgs/rsource-open-source/repositories",
      permanent: true,
    });
  }

  aliases.aliases.forEach((n, k) => {
    redirectRoutes.push({
      source: `/${k}`,
      destination: `/${n}`,
      permanent: true,
    });
  });

  Object.keys(routes.routes).forEach((n) => {
    redirectRoutes.push({
      source: `/${n}`,
      destination: routes.routes[n],
      permanent: true,
    });
  });

  ([{
      source: '/strafesnet/',
      destination: 'https://roblox.com/groups/6980477/StrafesNET',
      permanent: true
  },{
      source: '/strafesnet/old',
      destination: 'https://roblox.com/2607715/Roblox-bhoppers',
      permanent: true
  },{
      source: '/strafesnet/bhop',
      destination: 'https://roblox.com/games/5315046213/bhop',
      permanent: true
  },{
      source: '/strafesnet/surf',
      destination: 'https://roblox.com/games/5315066937/surf',
      permanent: true
  },{
      source: '/strafesnet/dev',
      destination: 'https://roblox.com/games/5721760322/dev',
      permanent: true
  },{
      source: '/strafesnet/maptest-deathrun',
      destination: 'https://roblox.com/games/6870563649/Deathrun-Maptest',
      permanent: true
  },{
      source: '/strafesnet/maptest-surf-new',
      destination: 'https://roblox.com/games/8642163771/Surf-Maptest-New-Physics',
      permanent: true
  },{
      source: '/strafesnet/maptest-bhop-new',
      destination: 'https://roblox.com/games/8635061347/Bhop-Maptest-New-Physics',
      permanent: true
  },{
      source: '/strafesnet/maptest-surf',
      destination: 'https://roblox.com/games/517206177/Surf-Maptest',
      permanent: true
  },{
      source: '/strafesnet/maptest-bhop',
      destination: 'https://roblox.com/games/517201717/Bhop-Maptest',
      permanent: true
  }] as Redirect[]).forEach(r => redirectRoutes.push(r))

  return redirectRoutes;
}
