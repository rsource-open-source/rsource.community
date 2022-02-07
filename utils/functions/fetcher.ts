import fetch from "node-fetch";

export default async function fetcher(url: string): Promise<unknown> {
  return await fetch(url).then((r) => r.json());
}
