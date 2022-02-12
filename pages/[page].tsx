// import teleporter from "../utils/functions/teleporter";
import Metadata from "../utils/components/metadata";
import Head from "next/head";
import { colors } from "../utils/constants";

export default function page(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          content={colors.primary}
          data-react-helmet="true"
          name="theme-color"
        ></meta>
        <Metadata />
      </Head>
    </>
  );
}
