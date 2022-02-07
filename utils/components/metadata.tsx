import { getRepositoryInfo, getOrganizationInfo } from "../functions/github";
import findRoute from "../functions/scout";
import { regexes } from "../etc/regex";

export default async function Metadata(): Promise<JSX.Element> {
  let route = findRoute();
  if (!route) return <></>;
  let routeAsUrl = new URL(route);

  if (route.match(regexes.isOrg) && !route.match(regexes.isRepo)) {
    const orgInfo = await getOrganizationInfo(
      routeAsUrl.pathname.replace(regexes.isOrg, "")
    );

    if (!orgInfo) return <></>;
    const { name, description, avatar_url, html_url } = orgInfo;

    return (
      <>
        <meta property="og:title" content={name} />
        <meta property="og:url" content={html_url} />
        <meta
          property="og:image"
          content={avatar_url.replace(/\?s\=\d*/, "")}
        />
        <meta property="og:description" content={description} />
        <meta name="theme-color" content="#171a21" />
      </>
    );
  } else if (route.match(regexes.isRepo)) {
    let repo = routeAsUrl.pathname.substring(1);

    const repoInfo = await getRepositoryInfo(repo);
    if (!repoInfo) return <></>;
    const { description, html_url, language, name } = repoInfo;
    const avatar_url = repoInfo.owner.avatar_url;

    return (
      <>
        <meta
          property="og:title"
          content={`${name.replaceAll("-", " ")} | ${language}`}
        />
        <meta property="og:url" content={html_url} />
        <meta
          property="og:image"
          content={avatar_url.replace(/\?s\=\d*/, "")}
        />
        <meta property="og:description" content={description} />
        <meta name="theme-color" content="#171a21" />
      </>
    );
  }

  return (
    <>
      <meta property="og:title" content="unknown redirect" />
      <meta name="theme-color" content="#171a21" />
    </>
  );
}
