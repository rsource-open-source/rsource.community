import findRoute from "./route";

export default function teleporter() {
  let res = findRoute();
  console.log(res);
  if (res) window.location.href = res;
  else window.location.href = "/";
}
