import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import redirectRoutes from "../../utils/routes";
import { readFileSync } from "fs";
import { Redirect } from "next/dist/lib/load-custom-routes";
const query = readFileSync("./request.gql", "utf8");

function GetRepoSpecifics(redirects: Redirect[]): JSX.Element {
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
  // const res = await fetch("");
  // const data = await res.json();
  let props = await redirectRoutes(process.env.GITHUB_TOKEN!, query, true);
  props = props.filter((p) => p.source.startsWith("/repo/"));
  props = Object.assign({}, props);

  return {
    props,
  };
};

export default GetRepoSpecifics;
