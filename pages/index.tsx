import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ghroutes } from "rsource-routes";
import Block from "../utils/components/block";

// import redirectRoutes from "../utils/routes";
// import { readFileSync } from "fs";

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
              <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                <a href="https://rsource.community/github">
                  <div className="bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max mb-4">
                    <div className="flex grid-cols-2 gap-4 bg-center bg-cover bg-no-repeat truncate p-5 rounded-md bg-[url('./../public/assets/images/rsource_banner_notitle.png')]">
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
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-4">
                <div className="h-[18.5rem] bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer">
                  <div className="bg-no-repeat max-h-[7.5rem] overflow-hidden align-middle">
                    <Image
                      className="min-h-[8rem] mx-auto object-cover rounded-t-md"
                      src={
                        "https://aixxe.net/uploads/2018/12/V08Cpw63tJmQd5iGrzillG2FFPrMvjdQ8I5anvpr.jpeg"
                      }
                      alt="surf_It_omnific"
                      width={1416}
                      height={493}
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="truncate">rsource css server</h2>
                    <h3 className="text-slate-400 text-xs pb-3 truncate">
                      <a href="" className="hover:underline">
                        steam://connect/
                        <wbr />
                        77.99.74.252:27015
                      </a>
                    </h3>
                    <p className="italic text-sm line-clamp-4">
                      <span className="not-italic">Current Map:</span>
                      surf_It_omnific
                    </p>
                  </div>
                </div>
                <Block
                  img={
                    "https://repository-images.githubusercontent.com/448160350/fb5e5009-3d24-4c31-ac01-53b229b876bc"
                  }
                  title="rsource redirect"
                  link={"https://rource.community/repo/redirect/"}
                  notItalic="🌌"
                  italic="Teleport to specific servers and public VIPs in the StrafesNET games."
                />
                <div className="h-[18.5rem] bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer">
                  <div className="max-h-[7.5rem] rounded-t-md bg-slate-1100 h-[8rem]"></div>
                  <div className="p-5">
                    <h2>lorem ipsum dolor</h2>
                    <h3 className="text-slate-400 text-xs pb-3 truncate">
                      <a href="" className="hover:underline">
                        http://sit-amet.consectetur
                      </a>
                    </h3>
                    <p className="italic text-sm">
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                </div>
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
