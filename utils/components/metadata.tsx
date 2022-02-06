import { getRepositoryInfo } from "../functions/github";
import scout from "../functions/scout";
// if is valid redirect, render
// if is github redirect, do api thing

export default function Metadata(): JSX.Element {
  // // get information
  // let res = scout();
  // if (!res) return <></>;
  // let url = new URL(res);
  // if (url.hostname === "github.com") {}

  // render
  getRepositoryInfo("rsource-android");
  return (
    <>
      <meta
        content={"unknown redirect" || "rsource community"}
        property="og:title"
      ></meta>
    </>
  );
}
