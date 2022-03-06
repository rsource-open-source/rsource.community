import { useRouter } from "next/router";
import { ghroutes } from "rsource-routes";
import redirectRoutes from "../../utils/routes";
import { readFileSync } from "fs";
import arrayFind from "../../utils/functions/arrayFind";

export default function Repo({ repo }: { repo: any }) {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Hello {id}</h1>;
}

export async function getStaticProps({ params }: { params: string }) {
  const query = readFileSync("./public/request.gql", "utf8");
  const repos = (
    await ghroutes.getGitHubRepos(process.env.GITHUB_TOKEN!, query)
  ).organization.repositories.edges;

  return {
    props: {
      repo: params,
    },
  };
}
