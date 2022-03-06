import Head from "next/head";
import { colors } from "../utils/constants";
import { Redirect } from "next/dist/lib/load-custom-routes";
import mapMetadata from "../utils/components/mapmetadata";

export default function page(): JSX.Element {
  return (
    <>
      <Head>
        {}
        <meta
          content={colors.primary}
          data-react-helmet="true"
          name="theme-color"
        ></meta>
        {/* <Metadata /> */}
      </Head>
    </>
  );
}
