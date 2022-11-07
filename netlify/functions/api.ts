import { greet } from "../../src/mod.ts";

export default async (req: Request) => {
  const url = new URL(req.url);
  const name = url.searchParams.get("name");
  const greeting = greet(name);

  return new Response(greeting);
};
