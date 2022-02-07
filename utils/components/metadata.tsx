import {
  getRepositoryInfo,
  getOrganizationInfo,
  removeImageNonsense,
} from "../functions/github";
import findRoute from "../functions/scout";
import { regexes } from "../etc/regex";
import React from "react";
import mapMetadata from "./mapmetadata";

export default class Metadata extends React.Component {
  async render() {
    let route = findRoute();
    if (!route) return <></>;
    let routeAsUrl = new URL(route);

    if (route.match(regexes.isOrg) && !route.match(regexes.isRepo)) {
      const orgInfo = await getOrganizationInfo(
        routeAsUrl.pathname.replace(regexes.isOrg, "")
      );

      if (!orgInfo) return <></>;
      const { name, description, avatar_url, html_url } = orgInfo;

      return mapMetadata(
        name,
        html_url,
        description,
        removeImageNonsense(avatar_url)
      );
    } else if (route.match(regexes.isRepo)) {
      let repo = routeAsUrl.pathname.substring(1);

      const repoInfo = await getRepositoryInfo(repo);
      if (!repoInfo) return <></>;
      const { description, html_url, language, name } = repoInfo;
      const avatar_url = repoInfo.owner.avatar_url;

      return mapMetadata(
        `${name.replaceAll("-", " ")} | ${language}`,
        html_url,
        description,
        removeImageNonsense(avatar_url)
      );
    }

    return (
      <>
        <meta property="og:title" content="unknown redirect" />
      </>
    );
  }
}
