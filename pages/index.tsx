import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import redirectRoutes from "../utils/routes";
// import { readFileSync } from "fs";

// const query = readFileSync("./public/request.gql", "utf8");

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>rsource community</title>
        <meta
          property="og:title"
          content="rsource community: A StrafesNET Improvement Project"
        ></meta>
        <meta
          property="og:description"
          content="rsource is a project started by insyri, aimed to create services around the StrafesNET ecosystem, including map development support, game unifying creations, and constructing transcendent experiences."
        ></meta>
        <meta property="og:url" content="https://rsource.community/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:image"
          content={
            "https://media.discordapp.net/attachments/768093841793351723/945467062208331806/rsource_banner.png"
          }
        ></meta>
        <meta
          content="#171a21"
          data-react-helmet="true"
          name="theme-color"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="redirects">
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
        </div>
      </main>
    </>
  );
};

export default Home;
