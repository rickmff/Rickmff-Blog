import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Page() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div className="px-60 py-10 animate-spin text-[#FF530A]">
            Loading Preview Data...
          </div>
        }
      >
        <PreviewBlogList />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <div className="px-60 py-10">
      <h1 className="text-4xl ">Not in a preview mode</h1>
    </div>
  );
}
