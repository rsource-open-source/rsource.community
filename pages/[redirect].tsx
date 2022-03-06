import Head from "next/head";
import { useRouter } from "next/router";
import { colors } from "../utils/constants";
import redirectRoutes from "../utils/routes";
import { GetStaticPaths, GetStaticProps } from "next/types";

export default function Page(): JSX.Element {
  const router = useRouter();
  const redirect = router.query.redirect;
  if (!redirect) return <></>;
  return <div>{redirect}</div>;
}

type Props = {
  props?: {
    title: string;
    description: string;
    stargazercount: number;
    usesImg: boolean;
    imgUrl: string;
    homepageUrl: string;
    url: string;
    primaryLanguage?: string;
  };
  notFound: boolean;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { readFileSync } = await import("fs");
  const query = readFileSync("./public/request.gql", "utf8");
  const routeLib = await import("rsource-routes");
  const redirects = await routeLib.ghroutes.getGitHubRepos(
    process.env.GITHUB_TOKEN!,
    query
  );

  const { edges } = redirects.organization.repositories;
  let newRepos: typeof edges = [];

  edges.forEach((n) => {
    if (n.node.name.startsWith("rsource!")) {
      newRepos.push(n);
    }
  });

  const paths = newRepos.map((n) => n.node.name);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  props: { redirect },
}: {
  props: { redirect: any };
}) => {
  const { readFileSync } = await import("fs");
  const query = readFileSync("./public/request.gql", "utf8");
  const routeLib = await import("rsource-routes");
  const names = routeLib.ghroutes.getGitHubRepos(
    process.env.GITHUB_TOKEN!,
    query
  );
  const thisRepo = (await names).organization.repositories.edges.find(
    (x) => x.node.name === redirect
  );

  if (!thisRepo)
    return {
      notFound: true,
      props: {},
    };

  return {
    props: {
      title: thisRepo.node.name,
      description: thisRepo.node.description,
      stargazercount: thisRepo.node.stargazercount,
      usesImg: thisRepo.node.usesCustomOpenGraphImage,
      imgUrl: thisRepo.node.openGraphImageUrl,
      homepageUrl: thisRepo.node.homepageUrl,
      url: thisRepo.node.url,
      primaryLanguage: thisRepo.node.primaryLanguage?.name,
    },
    notFound: false,
  };
};
