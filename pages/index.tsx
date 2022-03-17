import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ghroutes } from "rsource-routes";
import Block, { FunctionWithParameter } from "../utils/components/block";

const Home: NextPage<RepoProps> = (repoProps) => {
  return (
    <>
      <Head>
        <title>rsource community</title>
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
          content={
            "https://media.discordapp.net/attachments/768093841793351723/945467062208331806/rsource_banner.png"
          }
        />
        <meta content="#171a21" data-react-helmet="true" name="theme-color" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <div className="font-mono text-cyan-50 h-screen">
          <div className="p-10">
            <div>
              <header className="text-2xl pb-5">rsource.community</header>
              {/* <div>
                <span className="invisible sm:visible">sm </span>
                <span className="invisible md:visible">md </span>
                <span className="invisible lg:visible">lg </span>
                <span className="invisible xl:visible">xl </span>
                <span className="invisible 2xl:visible">2xl </span>
              </div> */}
            </div>
            <main>
              {/* top */}
              <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                <a href="https://rsource.community/discord">
                  <div className="bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max mb-4">
                    <div
                      className={`flex grid-cols-2 gap-4 bg-center bg-cover bg-no-repeat truncate p-5 rounded-md bg-[url('./../public/images/rsource_banner_notitle.png')]`}
                    >
                      <div
                        className={`w-8 h-6 bg-center bg-cover  bg-[url('./../public/images/borrowed/discord_logo.png')]`}
                      ></div>
                      <div className="grow invisible sm:visible">
                        rsource discord server
                      </div>
                    </div>
                  </div>
                </a>
                {/* <HeaderBlock
                  backgroundImg="./../public/images/rsource_banner_notitle.png"
                  link="https://rsource.community/discord"
                  title="rsource discord server"
                  icon="./../public/images/borrowed/github_mark.png"
                />
                <HeaderBlock
                  backgroundImg="./../public/images/borrowed/github_globe.png"
                  icon="./../public/images/borrowed/github_mark.png"
                  title="rsource github organization"
                  link="https://rsource.community/github"
                /> */}
              </div>
              {/* blocks */}
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-4">
                {/* {function () {
                  for (let [key] of Object.entries(repoProps)) {
                    let repo = repoProps[key];
                    <Block
                      imgClass="./../public/images/rsource_banner_notitle.png"
                      title={repo.name}
                      link={repo.url}
                      italic={
                        repo.description[0].match(/\p{Emoji}/u)
                          ? repo.description[0]
                          : ""
                      }
                      notItalic={repo.description.substring(1)}
                    />;
                  }
                }} */}
                {/* <FunctionWithParameter parameter="test" /> */}
                {/* <Block
                  bgurl={Object.values(repoProps)[0].url}
                  link={Object.values(repoProps)[0].imgUrl}
                  title={Object.values(repoProps)[0].name}
                  italic={
                    Object.values(repoProps)[0].description[0].match(
                      /\p{Emoji}/u
                    )
                      ? Object.values(repoProps)[0].description[0]
                      : ""
                  }
                  notItalic={Object.values(repoProps)[0].description.substring(
                    Object.values(repoProps)[0].description.indexOf(" ") + 1
                  )}
                />
                ; */}
                {Object.values(repoProps).map<JSX.Element>((repo) => {
                  // return <p key={repo.name}>{JSON.stringify(repo)}</p>;
                  return (
                    <Block
                      key={repo.name}
                      bgurl={repo.imgUrl}
                      link={repo.url}
                      title={repo.name}
                      italic={
                        repo.description[0].match(/\p{Emoji}/u)
                          ? repo.description[0]
                          : ""
                      }
                      notItalic={repo.description.substring(
                        repo.description.indexOf(" ") + 1
                      )}
                    />
                  );
                })}
                {/* <Block
                  imgClass={tw`${putIntoimgClass(
                    "./../public/images/rsource_banner_notitle.png"
                  )}`}
                  title="rsource redirect"
                  hyperlinkText={<>hasdsd</>}
                  link="https://rource.community/repo/redirect/"
                  notItalic="🌌"
                  italic="Teleport to specific servers and public VIPs in the StrafesNET games."
                /> */}
              </div>
            </main>
          </div>
          <footer className="mt-auto bg-slate-1100 border-slate-800 border-t p-14">
            brought to you by{" "}
            <a
              href="localhost:3000/referral"
              className="text-[#0069FF] hover:underline"
            >
              digitalocean
            </a>
            <br />
            <a
              href="mailto:contact@rsource.community"
              className="hover:underline text-slate-400 text-xs"
            >
              contact@rsource.community
            </a>
            <br />
            <p className="text-right text-xs text-slate-400">thank you</p>
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
  const query = readFileSync("./request.gql", "utf8");

  const res = await ghroutes.getGitHubRepos(process.env.GITHUB_TOKEN!, query);
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
