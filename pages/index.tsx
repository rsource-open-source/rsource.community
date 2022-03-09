import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ghroutes } from "rsource-routes";
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
      <main>
        <div className="font-mono bg-slate-1000 text-cyan-50 h-screen pl-10 pr-10">
          <h1 className="text-2xl pt-10 pb-5">rsource.community</h1>
          <div className="grid gap-4 grid-cols-4">
            <div className="bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max mb-4">
              {/* <!-- <img src="https://camo.githubusercontent.com/87de4e32543ffa21078137714cac251eb86315f43fa3c1d2e99bba50ea42f742/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3736383039333834313739333335313732332f3934353436373036323230383333313830362f72736f757263655f62616e6e65722e706e67" className="rounded-md"> --> */}
              <div className="p-5 bg-top rounded-md bg-cover bg-[url('https://camo.githubusercontent.com/87de4e32543ffa21078137714cac251eb86315f43fa3c1d2e99bba50ea42f742/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3736383039333834313739333335313732332f3934353436373036323230383333313830362f72736f757263655f62616e6e65722e706e67')]">
                rsource discord server
              </div>
            </div>
            <div className="hidden sm:block bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max mb-4">
              {/* <!-- <img src="https://camo.githubusercontent.com/87de4e32543ffa21078137714cac251eb86315f43fa3c1d2e99bba50ea42f742/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3736383039333834313739333335313732332f3934353436373036323230383333313830362f72736f757263655f62616e6e65722e706e67" className="rounded-md"> --> */}
              <div className="p-5 bg-[center_top_-4rem] rounded-md bg-cover bg-[url('https://github.githubassets.com/images/modules/site/home/globe.jpg')]">
                rsource github organization
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-4">
            <div className="bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max">
              <Image
                src="https://aixxe.net/uploads/2018/12/V08Cpw63tJmQd5iGrzillG2FFPrMvjdQ8I5anvpr.jpeg"
                alt="a thumbnail for surf_It_omnific"
                className="max-h-60 rounded-t-md bg-center"
                width={347}
                height={997}
              />
              <div className="p-5">
                <h2 className="">rsource css server</h2>
                <h3 className="text-slate-400 text-xs pb-3 truncate">
                  <a href="https://github.com/" className="hover:underline">
                    steam://connect/
                    <wbr />
                    77.99.74.252:27015
                  </a>
                </h3>
                <p className="italic text-sm">
                  <span className="not-italic">Current map:</span>
                  surf_lt_omnific
                </p>
              </div>
            </div>
            {/* <!-- <div className="bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max">
              <img alt="ok" src="https://avatars.githubusercontent.com/u/85522499" className=" max-h-60 rounded-t-md">
              <div className="p-5">
                <h2 className="">rsource-redirect</h2>
                <h3 className="text-slate-400 text-xs pb-3"><a href="https://github.com/" className="hover:underline">steam://connect/77.99.74.252:27015</a></h3>
                <p className="italic text-sm">
                  <span className="not-italic">Current map:</span>
                  surf_lt_omnific
                  </p>
              </div>
            </div> --> */}
          </div>
          <div>
            <p className="invisible sm:visible">sm</p>
            <p className="invisible md:visible">md</p>
            <p className="invisible lg:visible">lg</p>
            <p className="invisible xl:visible">xlg</p>
          </div>
          {/* <div>
                <pre>
                  <h1>rsource community</h1>
                  <p>available redirects:</p>
                  <p>{}</p>
                  <a href="https://www.digitalocean.com/?refcode=02e293f3a59e&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
                    <Image
                      src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg"
                      alt="DigitalOcean Referral Badge"
                      width={200}
                      height={65}
                    />
                  </a>
                  <a href="https://docs.digitalocean.com/products/accounts/referrals/">
                    <br></br>why is this here?
                  </a>
                </pre>
              </div> */}
        </div>
      </main>
    </>
  );
};

// export const getStaticProps = async (): Promise<GetStaticProps> => {
//   const { readFileSync } = await import("fs");
//   const query = readFileSync("./public/request.gql", "utf8");

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
