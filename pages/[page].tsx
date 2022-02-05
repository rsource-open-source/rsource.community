import * as readroutes from "../public/routes.json";
import load404 from "./404";
import Head from "next/head";

const routes: { [index: string]: string } = readroutes;

export default function teleporter(): void | JSX.Element {
  // Check if client url is a valid route by iterating through routes.json
  // if so, redirect
  // else, redirect to 404
  if (typeof window !== "undefined") {
    let res: { found: boolean; url: string } = {
      found: false,
      url: "",
    };
    for (const key in routes) {
      if (routes.hasOwnProperty(key))
        if (window.location.pathname === routes[key]) {
          res.found = true;
          res.url = routes[key];
          break;
        }
    }
    if (res.found)
      return (
        <>
          <Head>
            <title>{res.url}</title>
          </Head>
        </>
      );
    // window.location.href = res.url
    else return <>{load404()}</>;
  }
}
