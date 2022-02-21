import type { NextPage } from "next";
import Head from "next/head";
import { routes } from "../public/routes";
import Image from "next/image";
// import * as THREE from "three";

let mappedRoutes: JSX.Element[] = [];
for (const [k, v] of Object.entries(routes))
  mappedRoutes.push(<a href={v}>{`\n${k} => ${v}`}</a>); // `\n${k} => ${v}`

// if (typeof window !== "undefined") {
//   const scene = new THREE.Scene();

//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );
//   const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector("#bg")!,
//   });

//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.position.setZ(35);

//   renderer.render(scene, camera);

//   const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//   const material = new THREE.MeshBasicMaterial({
//     color: 0xffffff,
//     wireframe: true,
//   });

//   const mesh = new THREE.Mesh(geometry, material);

//   const grid = new THREE.GridHelper(100, 10);

//   // mesh.rotation.x = 1.5708;

//   scene.add(mesh, grid);
//   renderer.render(scene, camera);
// }

const Home: NextPage = () => {
  return (
    <div>
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
            "https://media.discordapp.net/attachments/768093841793351723/945448961832005642/rsource_banner.png"
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
        <pre>
          <h1>rsource community</h1>
          <p>available redirects:</p>
          <p>{mappedRoutes}</p>
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
        {/* <canvas id="bg"></canvas> */}
      </main>
    </div>
  );
};

export default Home;
