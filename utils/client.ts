import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "pz611g0k",
  dataset: "production",
  apiVersion: "2023-02-19",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
