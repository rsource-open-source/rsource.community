import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { tw } from "twind";
import Block, { putIntoimgClass } from "../utils/components/block";

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
              <div>
                <span className="invisible sm:visible">sm </span>
                <span className="invisible md:visible">md </span>
                <span className="invisible lg:visible">lg </span>
                <span className="invisible xl:visible">xl </span>
                <span className="invisible 2xl:visible">2xl </span>
              </div>
            </div>
            <main>
              {/* top */}
              <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                <a href="https://rsource.community/github">
                  <div className="bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max mb-4">
                    <div className="flex grid-cols-2 gap-4 bg-center bg-cover bg-no-repeat truncate p-5 rounded-md bg-[url('./../public/images/rsource_banner_notitle.png')]">
                      <div className="flex-none bg-gray-500 rounded-full w-6 h-6"></div>
                      <div className="grow invisible sm:visible">
                        rsource discord server
                      </div>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max mb-4">
                    <div className="flex grid-cols-2 gap-4 truncate bg-center bg-cover bg-no-repeat p-5 rounded-md bg-[url('https://github.githubassets.com/images/modules/site/home/globe.jpg')]">
                      <div className="flex-none bg-gray-500 rounded-full w-6 h-6"></div>
                      <div className="grow invisible sm:visible">
                        rsource github organization
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* blocks */}
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-4">
                <Block
                  imgClass={tw`${putIntoimgClass(
                    "https://repository-images.githubusercontent.com/448160350/fb5e5009-3d24-4c31-ac01-53b229b876bc"
                  )}`}
                  title="rsource redirect"
                  link="https://rource.community/repo/redirect/"
                  notItalic="🌌"
                  italic="Teleport to specific servers and public VIPs in the StrafesNET games."
                />
              </div>
            </main>
          </div>
          <footer className="mt-auto bg-slate-1100 border-slate-800 border-t p-14">
            brought to you by{" "}
            <a href="" className="text-[#0069FF] hover:underline">
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

// export const getStaticProps = async (): Promise<GetStaticProps> => {
//   const { readFileSync } = await import("fs");
//   const query = readFileSync("./request.gql", "utf8");

//   const res = await ghroutes.getGitHubRepos(process.env.GITHUB_TOKEN!, query);
//   let props: { name: string; url: string }[] = [];
//   res.organization.repositories.edges.forEach(({ node }) => {
//     props.push({ name: node.name, url: node.url });
//   });

//   return {
//     props,
//   };
// };

export default Home;
