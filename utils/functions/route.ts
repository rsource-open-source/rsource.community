import * as readroutes from "../../public/routes.json";

type RouteKeys = keyof typeof readroutes;
type RouteMapped = {
  [Property in RouteKeys]: string; // `https://${string}` | `/${string}`;
};
const routes: RouteMapped = JSON.parse(JSON.stringify(readroutes));

type NextRoute = {
  source: `/${RouteKeys}`;
  destination: string;
  permanent: boolean;
};

let nextRoutes: NextRoute[] = [];
for (const route in routes) {
  nextRoutes.push({
    source: `/${route}`,
    destination: routes[route as unknown as RouteKeys],
    permanent: false,
  } as NextRoute);
}

export default nextRoutes;
