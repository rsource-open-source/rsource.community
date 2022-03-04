import { Redirect } from "next/dist/lib/load-custom-routes";
// import { readFileSync } from "fs";
// const query = readFileSync("../public/request.gql", "utf8");

export default async function redirectRoutes(
  oauth: string,
  query: string
): Promise<Redirect[]> {
  let redirectRoutes: Redirect[] = [];

  const { ghroutes, aliases, routes } = await import("rsource-routes");

  let waitedghoutes = await ghroutes.formatRepos(
    await ghroutes.getGitHubRepos(oauth, query)
  );

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

  redirectRoutes.push({
    source: "/repo",
    destination: "https://github.com/orgs/rsource-open-source/repositories",
    permanent: true,
  });

  return redirectRoutes;
}
