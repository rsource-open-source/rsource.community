import * as readroutes from "../../public/routes.json";

const routesJSON: { [index: string]: string } = JSON.parse(
  JSON.stringify(readroutes)
);

delete routesJSON["default"];

const objectToMap = (obj: { [index: string]: string }) => {
  const keys = Object.keys(obj);
  const map: Map<string, string> = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], obj[keys[i]]);
  }
  return map;
};

const routes = objectToMap(routesJSON);

export default function scout(): string | undefined {
  if (typeof window !== "undefined") {
    for (const key of routes) {
      if (
        Array.from(routes.keys()).includes(
          window.location.pathname.substring(1)
        )
      ) {
        return routes.get(key[0])!;
      }
    }
  }
}
