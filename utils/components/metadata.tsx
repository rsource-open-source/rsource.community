// import {
//   getRepositoryInfo,
//   getOrganizationInfo,
//   removeImageNonsense,
//   GitHubOrgContents,
//   GitHubRepoContents,
// } from "../functions/github";
// import findRoute from "../functions/route";
// import { regexes, unknownJsx } from "../constants";
// import React from "react";
// import mapMetadata from "./mapmetadata";

// interface MetadataState {
//   orgdata: null | GitHubOrgContents;
//   repodata: null | GitHubRepoContents;
// }

// export default class Metadata extends React.Component<{}, MetadataState> {
//   constructor(...args: any[]) {
//     super([...args]);
//     this.state = { orgdata: null, repodata: null };
//   }

//   async getOrgData() {
//     let route = findRoute();
//     if (!route) return null;
//     return await getOrganizationInfo(
//       new URL(route).pathname.replace(regexes.isOrg, "")
//     );
//   }

//   async getRepoData() {
//     let route = findRoute();
//     if (!route) return null;
//     return await getRepositoryInfo(new URL(route).pathname.substring(1));
//   }

//   componentDidMount() {
//     this.getOrgData().then((orgdata) => this.setState({ orgdata }));
//     this.getRepoData().then((repodata) => this.setState({ repodata }));
//   }

//   render() {
//     let route = findRoute();
//     console.log(route);
//     if (!route) return unknownJsx;

//     if (route.match(regexes.isOrg) && !route.match(regexes.isRepo)) {
//       const orgInfo = this.state.orgdata;
//       if (!orgInfo) return unknownJsx;

//       const { name, description, avatar_url, html_url } = orgInfo;

//       return mapMetadata(
//         name,
//         html_url,
//         description,
//         removeImageNonsense(avatar_url)
//       );
//     } else if (route.match(regexes.isRepo)) {
//       const repoInfo = this.state.repodata;
//       if (!repoInfo) return unknownJsx;

//       const {
//         name,
//         description,
//         language,
//         owner: { avatar_url },
//         html_url,
//       } = repoInfo;

//       return mapMetadata(
//         `${name.replaceAll("-", " ")} | ${language}`,
//         html_url,
//         description,
//         removeImageNonsense(avatar_url)
//       );
//     }

//     return unknownJsx;
//   }
// }

export {};
