import teleporter from "../utils/functions/teleporter";
import Metadata from "../utils/components/metadata";
import Head from "next/head";

export default function renda(): JSX.Element {
  teleporter();
  return (
    <>
      <Head>
        <meta
          content="#171a21"
          data-react-helmet="true"
          name="theme-color"
        ></meta>
        <Metadata />
      </Head>
    </>
  );
}
