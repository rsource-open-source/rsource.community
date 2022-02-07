import axios from "axios";

export default async function fetcher(url: string): Promise<unknown> {
  const response = await axios.get(url);
  return await response.data;
}

interface response {
  [index: string]: unknown;
}

export function objectToArray(obj: response): Array<unknown> {
  return Object.keys(obj).map((key) => obj[key]);
}
