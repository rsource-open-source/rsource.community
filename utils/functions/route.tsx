import absoluteUrl from "next-absolute-url";
import * as readroutes from "../../public/routes.json";

type Routes = keyof typeof readroutes;
// this is a mapped type example from the Routes type
type RouteMapped = {
  [Property in Routes]: string;
};

const routes: RouteMapped = JSON.parse(JSON.stringify(readroutes));

export default function findRoute(): string | undefined {
  const path = absoluteUrl().origin;
  console.log(path);
  for (let key in routes)
    if (routes[key as unknown as Routes] === path) return key;
}
