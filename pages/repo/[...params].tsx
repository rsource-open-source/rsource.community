import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import { readFileSync } from "fs";
import { Redirect } from "next/dist/lib/load-custom-routes";
import { GitHubGQLRequest } from "../../utils/functions/github_gql";
import { GHOrgRepoNames } from "../../utils/types_constants/github";
const query = readFileSync("./request.gql", "utf8");

export default function GetRepoSpecifics(redirects: Redirect[]): JSX.Element {
  const router = useRouter();
  const params = router.query.params;
  if (!params) return <>undefined??? wtf!!!</>;

  // check if params[0] is a valid redirect.
  // if (Array.isArray(params)) return <>array??? wtf!!!</>;
  // if (params.match(/.+\/.+:.+/g) === null)
  // return <>bad param syntax??? wtf!!!</>;
  console.log(redirects);
  return <>{params}</>;
}

export const getServerSideProps: GetServerSideProps<Redirect[]> = async () => {
  // First we validate the repo name via the useRouter hook.
  let req = await GitHubGQLRequest<GHOrgRepoNames>(
    process.env.GITHUB_TOKEN,
    query
  );
  req.organization.repositories.edges.forEach(({ node }) => node.name);
  let props: Redirect[] = [];
  // props = props.filter((p) => p.source.startsWith("/repo/"));
  // props = Object.assign({}, props);

  return {
    props,
  };
};
