import * as readroutes from "../../public/routes.json";

type valueof<T> = T[keyof T];

type RouteKeys = keyof typeof readroutes;
type Route = valueof<RouteKeys>;

type RouteMapped = {
  [Property in RouteKeys]: string;
};

const routes: RouteMapped = JSON.parse(JSON.stringify(readroutes));

// now map it to next config routes structure
type NextRoute = {
  source: `/${RouteKeys}`;
  destination: string;
  permanent: boolean;
};

let nextRoute: NextRoute[] = [];

for (const route in routes) {
  nextRoute.push({
    source: `/${routes[route as unknown as RouteKeys]}`,
    destination: route,
    permanent: false,
  } as NextRoute);
}

// export default function findRoute(): string | undefined {
//   for (let key in routes)
//     if (routes[key as unknown as Routes] === path) return key;
// }
