import findRoute from "./scout";

export default function teleporter() {
  let res = findRoute();
  if (res) window.location.href = res;
  // else window.location.href = "/";
}
