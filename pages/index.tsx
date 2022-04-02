import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Block from "../utils/components/block";
import HeaderBlock from "../utils/components/headerblock";
import { GitHubGQLRequest } from "../utils/functions/github_gql";
import { GHOrgRepoEverything } from "../utils/types_constants/github";

const Home: NextPage<RepoProps> = (repoProps) => {
  return (
    <>
      <Head>
        <title>rsource community</title>
        <meta charSet="utf-8" />
        <meta name="author" content="insyri" />
        <meta
          name="keywords"
          content="rsource, roblox, roblox bhop, roblox surf, bhop, surf, map making, source, source engine, strafes, strafes net, strafesnet, strafes.net, quaternions, css, counter strike, counter strike source"
        />
        <meta
          name="description"
          content="rsource is a project started by insyri, aimed to create services around the StrafesNET ecosystem, including map development support, game unifying creations, and constructing transcendent experiences."
        />
        <meta
          property="og:title"
          content="rsource community: A StrafesNET Improvement Project"
        />
        <meta
          property="og:description"
          content="rsource is a project started by insyri, aimed to create services around the StrafesNET ecosystem, including map development support, game unifying creations, and constructing transcendent experiences."
        />
        <meta property="og:url" content="https://rsource.community/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://media.discordapp.net/attachments/768093841793351723/945467062208331806/rsource_banner.png"
        />
        <meta content="#171a21" data-react-helmet="true" name="theme-color" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="rsource community: A StrafesNET Improvement Project"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta lang="en" />
      </Head>
      <div className="flex flex-col">
        <div className="font-mono text-cyan-50 h-screen">
          <div className="p-10">
            <div>
              <header className="text-2xl pb-5">rsource.community</header>
            </div>
            <main>
              <div className="grid gap-4 grid-cols-3">
                <HeaderBlock
                  title="rsource discord server"
                  backgroundImg="/images/rsource_banner_notitle.png"
                  icon="/images/borrowed/discord_logo.png"
                  iconWidth={2}
                  link="https://rsource.community/discord"
                />
                <HeaderBlock
                  title="rsource github organization"
                  backgroundImg="/images/borrowed/github_globe.png"
                  icon="/images/borrowed/github_mark.png"
                  iconWidth={1.5}
                  link="https://rsource.community/github"
                />
                <HeaderBlock
                  title="rsource roblox group"
                  backgroundImg="/images/autobadges.png"
                  icon="/images/borrowed/roblox_logo.png"
                  iconWidth={1.5}
                  link="https://rsource.community/roblox"
                />
              </div>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-4">
                {Object.values(repoProps).map<JSX.Element>((repo) => {
                  return (
                    <Block
                      key={repo.name}
                      bgurl={repo.imgUrl}
                      link={repo.url}
                      title={repo.name}
                      description={repo.description}
                    />
                  );
                })}
              </div>
            </main>
          </div>
          <footer className="mt-auto bg-slate-1100 border-slate-800 border-t p-14">
            brought to you by{" "}
            <a
              href="https://rsource.community/referral"
              className="text-[#0069FF] hover:underline"
            >
              digitalocean
            </a>{" "}
            and{" "}
            <a
              href="https://cloudflare.com/"
              className="text-[#f63] hover:underline"
            >
              cloudflare
            </a>
            <br />
            <a
              href="mailto:contact@rsource.community"
              className="hover:underline text-slate-400 text-xs"
            >
              contact@rsource.community
            </a>
            <br />
            <p className="text-right text-xs text-slate-400">ur mom is fat</p>
          </footer>
        </div>
      </div>
    </>
  );
};

interface RepoProps {
  [key: string]: {
    name: string;
    url: string;
    description: string;
    imgUrl: string;
  };
}

export const getStaticProps: GetStaticProps<RepoProps> = async () => {
  const { readFileSync } = await import("fs");
  const query = readFileSync("./gql/everything.gql", "utf8");

  const res = await GitHubGQLRequest<GHOrgRepoEverything>(
    process.env.GITHUB_TOKEN,
    query
  );
  let props: RepoProps = {};
  res.organization.repositories.edges.forEach((m) => {
    props[m.node.name] = {
      description: m.node.description,
      name: m.node.name,
      url: m.node.url,
      imgUrl: m.node.openGraphImageUrl,
    };
  });

  return {
    props,
  };
};

export default Home;
