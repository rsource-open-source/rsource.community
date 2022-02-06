import scout from "./scout";

export default function teleporter() {
  let res = scout();
  if (res) window.location.href = res;
  // else window.location.href = "/";
}
