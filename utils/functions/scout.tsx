import * as readroutes from "../../public/routes.json";

type Routes = keyof typeof readroutes;
// this is a mapped type example from the Routes type
type RouteMapped = {
  [Property in Routes]: string;
};

const routes: RouteMapped = JSON.parse(JSON.stringify(readroutes));

export default function findRoute(): string | undefined {
  const path = window.location.pathname.substring(1);
  for (let key in routes) {
    let routeKey = key as unknown as Routes;
    if (routes[routeKey] === path) {
      return key;
    }
  }
}
