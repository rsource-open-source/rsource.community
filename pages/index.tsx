import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ghroutes } from "rsource-routes";
import { tw } from "twind";
import Block, { putIntoimgClass } from "../utils/components/block";
import HeaderBlock from "../utils/components/headerblock";

const Home: NextPage = () => {
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
                <HeaderBlock
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
                />
              </div>
              {/* blocks */}
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-4">
                <Block
                  imgClass={tw`${putIntoimgClass(
                    "./../public/images/rsource_banner_notitle.png'"
                  )}`}
                  title="rsource redirect"
                  hyperlinkText={<>hasdsd</>}
                  link="https://rource.community/repo/redirect/"
                  notItalic="🌌"
                  italic="Teleport to specific servers and public VIPs in the StrafesNET games."
                />
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

// export const getStaticProps = async (): GetStaticProps => {
//   const { readFileSync } = await import("fs");
//   const query = readFileSync("./request.gql", "utf8");

//   const res = await ghroutes.getGitHubRepos(process.env.GITHUB_TOKEN!, query);
//   let props: { name: string; url: string }[] = [];
//   res.organization.repositories.edges.forEach(({ node }) => {
//     props.push({ name: node.name, url: node.url });
//   });

//   return {
//     props
//   }
// };

export default Home;
